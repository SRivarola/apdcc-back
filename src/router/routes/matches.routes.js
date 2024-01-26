//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import MatchesController from "../../controllers/matches.controller.js";
import TargetsController from "../../controllers/target.controller.js";
import PlayersController from "../../controllers/players.controller.js";
import TournamentsController from "../../controllers/tournament.controller.js"
import moment from "moment";

const controller = new MatchesController();
const target_controller = new TargetsController();
const players_controller = new PlayersController();
const tournaments_controller = new TournamentsController();

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
    })

    this.get("/tournament/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id: tournament_id } = req.params;
        const { response: matches } = await controller.readAll({ tournament_id });
        const { response: tournament } = await tournaments_controller.readById(tournament_id);
        console.log(matches);
        console.log(tournament);
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

        // if (results.res_local > results.res_visit) {
        //   //local targets
        //   targetLocal.points = 3;
        //   targetLocal.wins = 1;

        //   //visit targets
        //   targetVisit.losses = 1;
        // }
        // if (results.res_local < results.res_visit) {
        //   //local targets
        //   targetLocal.losses = 1;

        //   //visit targets
        //   targetVisit.wins = 1;
        //   targetVisit.points = 3;
        // }
        // if (results.res_local === results.res_visit) {
        //   //local targets
        //   targetLocal.points = 1;
        //   targetLocal.ties = 1;

        //   //visit targets
        //   targetVisit.points = 1;
        //   targetVisit.ties = 1;
        // }

        targetLocal.played_matches = 1;
        targetLocal.red_cards = redCards.localPlayersWithRedCards;

        const target_local_response = await target_controller.update(
          targetLocal_id,
          targetLocal
        );
        console.log(target_local_response);
        targetVisit.played_matches = 1;
        targetVisit.red_cards = redCards.visitPlayersWithRedCards;

        const target_visit_response = await target_controller.update(
          targetVisit_id,
          targetVisit
        );
        console.log(target_visit_response);

        // if (redCards.localPlayersWithRedCards.length) {
        //   const players = redCards.localPlayersWithRedCards;
        //   for (let i = 0; i < players.length; i++) {
        //     const playerId = players[i];
        //     const { response } = await players_controller.readById(playerId);
        //     const red_cards = response.red_cards + 1;
        //     await players_controller.update(playerId, { red_cards });
        //   }
        // }

        // if (redCards.visitPlayersWithRedCards.length) {
        //   const players = redCards.visitPlayersWithRedCards;
        //   for (let i = 0; i < players.length; i++) {
        //     const playerId = players[i];
        //     const { response } = await players_controller.readById(playerId);
        //     const red_cards = response.red_cards + 1;
        //     await players_controller.update(playerId, { red_cards });
        //   }
        // }

        const match_response = await controller.updateById(id, data);

        console.log(match_response);

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
