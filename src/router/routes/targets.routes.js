//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import TargetsController from "../../controllers/target.controller.js";

const controller = new TargetsController();

export default class TargetsRouter extends MyRouter {
  init() {
    this.get(
      "/tournament/:tournament_id/team/:team_id",
      ["PUBLIC"],
      async (req, res, next) => {
        try {
          const { tournament_id, team_id } = req.params;

          const response = await controller.read({
            tournament_id,
            team_id,
          });

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("targets");
        } catch (error) {
          next(error);
        }
      }
    );

    this.get(
      "/tournament/:tournament_id/match/:match_id/team/:team_id", 
      ["PUBLIC"], 
      async (req, res, next) => {
        try {
          const { tournament_id, team_id, match_id } = req.params;

          const response = await controller.read({
            tournament_id,
            team_id,
            match_id
          });

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("targets");
          
        } catch (error) {
          next(error);
        }
      }
    );

    this.put(
      "/:id",
      ["ADMIN"],
      async (req, res, next) => {
        try {
          const { id } = req.params;
          const data = req.body;

          const response = await controller.update(id, data);

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("targets")
        } catch (error) {
          next(error);
        }
      }
    );

  }
}
