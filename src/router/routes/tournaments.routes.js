//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import TournamentsController from "../../controllers/tournament.controller.js";
import TargetsController from "../../controllers/target.controller.js";
//importacion utils
import { createMatches } from "../../utils/createMatches.js";
//importacion de middlewares
import moment from "moment";
import MatchesController from "../../controllers/matches.controller.js";

const tournament_controller = new TournamentsController();
const target_controller = new TargetsController();
const matches_controller = new MatchesController();

export default class TournamentsRouter extends MyRouter {
  init() {
    this.post("/create", ["ADMIN"], async (req, res, next) => {
      try {
        let body = req.body;

        const data = Object.entries(body).reduce((acc, [key, value]) => {
          if (value !== "") {
            acc[key] = value;
          }
          return acc;
        }, {});

        let tournament = await tournament_controller.create(data);

        const matches = await createMatches(
          data.teams_quantity,
          tournament.response,
          data.date,
          data.time,
          data.turns,
          data.team_1,
          data.team_2,
          data.team_3,
          data.team_4,
          data?.team_5,
          data?.team_6,
          data?.team_7,
          data?.team_8,
          data?.team_9,
          data?.team_10,
          data?.team_11,
          data?.team_12,
          data?.team_13,
          data?.team_14
        );

        return matches && tournament
          ? res.sendSuccessCreate(tournament)
          : res.sendNotFound("tournament");
      } catch (error) {
        next(error);
      }
    });

    this.get("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const { page } = req.query;
        const headers = req.headers.queries;
        let queries = headers ? JSON.parse(headers) : {};

        const data = Object.entries(queries).reduce((acc, [key, value]) => {
          if (key === "name") {
            acc[key] = new RegExp(value, 'i');
          } else if (value !== "") {
            acc[key] = value;
          }
          return acc;
        }, {});
        
        const response = await tournament_controller.read(data, {
          populate: [{ path: "category_id", select: "name" }],
          lean: true,
          limit: 10,
          page: page ? page : 1,
          sort: { 'createdAt' : -1 }
        });

        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get(
      "/all",
      ["ADMIN", "JUEZ"],
      async (req, res, next) => {
        try {
          const response = await tournament_controller.readAll();

          return response 
            ? res.sendSuccess(response)
            : res.sendNotFound('tournament')
        } catch (error) {
          next(error);
        }
      }
    )

    this.get("/tournament/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        const response = await tournament_controller.readById(req.params.id);

        return response
          ? res.sendSuccess(response)
          : res.sendNotFound("Countries");
      } catch (error) {
        next(error);
      }
    });

    this.put(
      "/:id",
      ["ADMIN"],
      async(req, res, next) => {
        try {
          let id = req.params.id;
          let data = req.body;
          
          let response = await tournament_controller.update(id, data);

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("tournament");
        } catch (error) {
          next(error);
        }
      }
    )

    this.delete("/:id", ["ADMIN"], async (req, res, next) => {
      try {

        const { id: tournament_id } = req.params;

        const { response: targetResponse } = await target_controller.read({tournament_id});
        const { response: matchesResponse } = await matches_controller.readAll({tournament_id});

        if(!targetResponse.length){
          return sendNotFound('targets');
        }
        if(!matchesResponse.length){
          return sendNotFound('matches');
        }

        for (let i = 0; i < targetResponse.length; i++) {
          const element = targetResponse[i];
          await target_controller.delete(element._id);
        }

        for (let i = 0; i < matchesResponse.length; i++) {
          const element = matchesResponse[i];
          await matches_controller.delete(element._id);
        }

        const { response } = await tournament_controller.delete(tournament_id);

        return response 
          ? res.sendSuccess(response)
          : res.sendNotFound('tournaments')
        
      } catch (error) {
        next(error)
      }
    })
  }
}
