//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import MatchesController from "../../controllers/matches.controller.js";
import TargetsController from "../../controllers/target.controller.js";
import PlayersController from "../../controllers/players.controller.js";
import moment from "moment";

const controller = new MatchesController();
const target_controller = new TargetsController();
const players_controller = new PlayersController();

export default class MatchesRouter extends MyRouter {
    init() {

        this.get(
            '/',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    const query = req.query;
                    const response = await controller.readAll(query);

                    return res.sendSuccess(response)
                } catch (error) {
                    next(error);
                }
            }
        );

        // actualiza la fecha de todas las rondas desde la que le indiques por body
        this.put(
            "/tournament/:id",
            ["ADMIN"],
            async (req, res, next) => {
                try {
                    const { id } = req.params;
                    const { round } = JSON.parse(req.headers.body);
    
                    const { response: matches } = await controller.readAll({ 
                        tournament_id: id,
                        round: { $gte: Number(round) }
                    })
    
                    for (let i= 0; i < matches.length; i++) {
                        const { date, _id } = matches[i];
                        const newDate = moment(new Date(date)).day(+7).format("MM/DD/YYYY");
                        const data = { date: newDate }
                        const res = await controller.updateById(_id, data);

                        if(!res.response){
                            return res.sendNotFound('match');
                        }
                    }
                    
                    return res.sendSuccess({
                        message: 'Matches updated successfully',
                        response: true
                    })
                } catch (error) {
                    next(error);                    
                }
            }
        );

        // actualiza solo la fecha de ese partido
        this.put(
            '/match/:id',
            ["ADMIN"],
            async (req, res, next) => {
                try {
                    const { id } = req.params;
                    const body = req.body;

                    const response = await controller.updateById(id, body);

                    return response 
                        ? res.sendSuccess(response)
                        : res.sendNotFound('match')
                } catch (error) {
                    next(error);
                }
            }
        );

        this.put("/results/:id", ["ADMIN"], async (req, res, next) => {
          try {
            const { id } = req.params;
            const {
              results,
              targetLocal_id,
              targetVisit_id,
              targetLocal,
              targetVisit,
              redCards
            } = req.body;
            
            if (results.res_local > results.res_visit) {
              //local targets
              targetLocal.points = 3;
              targetLocal.wins = 1;

              //visit targets
              targetVisit.losses = 1;
            }
            if (results.res_local < results.res_visit) {
              //local targets
              targetLocal.losses = 1;

              //visit targets
              targetVisit.wins = 1;
              targetVisit.points = 3;
            }
            if (results.res_local === results.res_visit) {
              //local targets
              targetLocal.points = 1;
              targetLocal.ties = 1;

              //visit targets
              targetVisit.points = 1;
              targetVisit.ties = 1;
            }

            targetLocal.played_matches = 1
            targetVisit.played_matches = 1

            if (redCards.localPlayersWithRedCards.length) {
                const players = redCards.localPlayersWithRedCards;
                for (let i = 0; i < players.length; i++) {
                    const playerId = players[i];
                    const { response } = await players_controller.readById(playerId);
                    const red_cards = response.red_cards + 1;
                    await players_controller.update(playerId, { red_cards });
                }
            }

            if (redCards.visitPlayersWithRedCards.length) {
                const players = redCards.visitPlayersWithRedCards;
                for (let i = 0; i < players.length; i++) {
                  const playerId = players[i];
                  const { response } = await players_controller.readById(
                    playerId
                  );
                  const red_cards = response.red_cards + 1;
                  await players_controller.update(playerId, { red_cards });
                }
            }


            const match_response = await controller.updateById(id, results);
            const target_local_response = await target_controller.update(targetLocal_id, targetLocal);
            const target_visit_response = await target_controller.update(targetVisit_id, targetVisit)

            return match_response &&
              target_local_response &&
              target_visit_response
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