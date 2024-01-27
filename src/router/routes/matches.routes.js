//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import MatchesController from "../../controllers/matches.controller.js";
import TargetsController from "../../controllers/target.controller.js";
import PlayersController from "../../controllers/players.controller.js";
import TournamentsController from "../../controllers/tournament.controller.js";
import moment from "moment";

const controller = new MatchesController();
const target_controller = new TargetsController();

export default class MatchesRouter extends MyRouter {
  init() {
    this.get("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const query = req.query;

        const data = Object.entries(query).reduce((acc, [key, value]) => {
          if (key === "date") {
            acc[key] = moment(value);
          } else if (value !== "") {
            acc[key] = value;
          }
          return acc;
        }, {});

        const response = await controller.readAll(data);
        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const response = await controller.readById(id);

        return response ? res.sendSuccess(response) : res.sendNotFound("match");
      } catch (error) {
        next(error);
      }
    });

    this.get("/tournament/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id: tournament_id } = req.params;
        const { response: matches } = await controller.readAll({
          tournament_id,
        });
        const matchsresults = []
        const teams = [];

        async function createTeamsArray(teams, matches){
          for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            if (
              !teams.includes(match.local.team_id._id)
            ) {
              teams.push(match.local.team_id._id);
            }
          }
          return matches;
        }

        async function matchesLocalTargets(teamMatchesLocal, target, team) {
          for (let i = 0; i < teamMatchesLocal.length; i++) {
            const element = teamMatchesLocal[i];
            if(!element?.res_local) {
              continue;
            }
            if(element.res_local > element.res_visit) {
              target.points = target.points + 3;
              target.wins++;
            } else if (element.res_local == element.res_visit) {
              target.points++;
              target.ties++;
            } else if (element.res_local < element.res_visit) {
              target.losses++;
            }
            target.played_matches++;
            const { response } = await target_controller.read({
              team_id: team,
              match_id: element._id
            })
            target.yellow_cards = target.yellow_cards + response[0].yellow_card;
            target.red_cards = target.red_cards + response[0].red_cards.length;
          }
        }

        async function matchesVisitTargets(teamMatchesVisit, target, team) {
          for (let i = 0; i < teamMatchesVisit.length; i++) {
            const element = teamMatchesVisit[i];
            if (!element?.res_visit) {
              continue;
            }
            if (element.res_visit > element.res_local) {
              target.points = target.points + 3;
              target.wins++;
            } else if (element.res_visit == element.res_local) {
              target.points++;
              target.ties++;
            } else if (element.res_visit < element.res_local) {
              target.losses++;
            }
            target.played_matches++;
            const { response } = await target_controller.read({
              team_id: team,
              match_id: element._id
            })
            target.yellow_cards = target.yellow_cards + response[0].yellow_card;
            target.red_cards = target.red_cards + response[0].red_cards.length;

          }
        }

        async function createMatchResults(teams, matches){
          await createTeamsArray(teams, matches);

          for (let i = 0; i < teams.length; i++) {
            const team = teams[i].toString();
            const teamMatchesLocal = matches.filter(
              (match) =>  match.local.team_id._id.toString() == team
            );
            const teamMatchesVisit = matches.filter(
              (match) => match.visit.team_id._id.toString() == team
            );
  
            let target = {
              points: 0,
              wins: 0,
              ties: 0,
              losses: 0,
              played_matches: 0,
              yellow_cards: 0,
              red_cards: 0
            }

            await matchesLocalTargets(teamMatchesLocal, target, team);
  
            await matchesVisitTargets(teamMatchesVisit, target, team);
          
            const { local: { team_id: { _id, name } } } = matches.find( m => m.local.team_id._id == team );
  
            matchsresults.push({
              _id,
              name,
              ...target,
            });
          }
        }

        await createMatchResults(teams, matches);
          
        return matches 
          ? res.sendSuccess(matchsresults) 
          : res.sendNotFound("match");

      } catch (error) {
        next(error);
      }
    });

    // actualiza la fecha de todas las rondas desde la que le indiques por body
    this.put("/tournament/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const { round } = JSON.parse(req.headers.body);

        const { response: matches } = await controller.readAll({
          tournament_id: id,
          round: { $gte: Number(round) },
        });

        for (let i = 0; i < matches.length; i++) {
          const { date, _id } = matches[i];
          const newDate = moment(date).add(7, "days");

          const data = { date: newDate };
          const res = await controller.updateById(_id, data);

          if (!res.response) {
            return res.sendNotFound("match");
          }
        }

        return res.sendSuccess({
          message: "Matches updated successfully",
          response: true,
        });
      } catch (error) {
        next(error);
      }
    });

    // actualiza solo la fecha de ese partido
    this.put("/match/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;

        const response = await controller.updateById(id, body);

        return response ? res.sendSuccess(response) : res.sendNotFound("match");
      } catch (error) {
        next(error);
      }
    });

    this.put("/results/:id", ["ADMIN", "JUEZ"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const {
          res_local,
          res_visit,
          targetLocal_id,
          targetVisit_id,
          targetLocal,
          targetVisit,
          redCards,
          fair_play,
          best_player,
        } = req.body;

        const data = {
          res_local,
          res_visit,
          fair_play,
          best_player,
        };

        targetLocal.red_cards = redCards.localPlayersWithRedCards;

        const target_local_response = await target_controller.update(
          targetLocal_id,
          targetLocal
        );

        targetVisit.red_cards = redCards.visitPlayersWithRedCards;

        const target_visit_response = await target_controller.update(
          targetVisit_id,
          targetVisit
        );

        const match_response = await controller.updateById(id, data);

        return match_response && target_local_response && target_visit_response
          ? res.sendSuccess({
              match_response,
              target_local_response,
              target_visit_response,
            })
          : res.sendNotFound("match");
      } catch (error) {
        next(error);
      }
    });
  }
}
