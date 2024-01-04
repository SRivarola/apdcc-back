//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import TournamentsController from "../../controllers/tournament.controller.js";
import TargetsController from "../../controllers/target.controller.js";
//importacion utils
import { createMatches } from "../../utils/createMatches.js";
//importacion de middlewares
import moment from 'moment';

const tournament_controller = new TournamentsController();
const target_controller = new TargetsController();

export default class TournamentsRouter extends MyRouter {
    init() {

        this.post(
            '/create',
            ['ADMIN'],
            async (req, res, next) => {
                try {
                  let body = req.body;

                  const data = Object.entries(body).reduce(
                    (acc, [key, value]) => {
                      if (value !== "") {
                        acc[key] = value;
                      }
                      return acc;
                    },
                    {}
                    );

                  let tournament = await tournament_controller.create(data);

                  const matches = await createMatches(
                    data.teams_quantity, 
                    tournament.response, 
                    data.date,
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
                    data?.team_10, 
                    data?.team_11, 
                    data?.team_12, 
                    data?.team_13
                  );

                  return matches && tournament
                      ?   res.sendSuccessCreate(tournament)
                      :   res.sendNotFound('tournament')
                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    const { name, page } = req.query;
                    const lookfor = new RegExp(name, "i");
                    const response = await tournament_controller.read(
                      name ? { name: lookfor } : {},
                      {
                        populate: [
                          { path: "category_id", select: "name" }
                        ],
                        lean: true,
                        limit: 10,
                        page: page ? page : 1,
                      }
                    );

                    return res.sendSuccess(response);
                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/tournament/:id',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    const response = await tournament_controller.readById(req.params.id);

                    return response
                        ? res.sendSuccess(response)
                        : res.sendNotFound("Countries");

                } catch (error) {
                    next(error)
                }
            }
        );

    }
}