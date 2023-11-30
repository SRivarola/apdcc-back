//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import TournamentsController from "../../controllers/tournament.controller.js";
import TargetsController from "../../controllers/target.controller.js";
//importacion utils
import { create4teamsMatches, create5teamsMatches } from "../../utils/createMatches.js";
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
                    let { 
                        name, 
                        teams_quantity, 
                        category_id,
                        day,
                        time,
                        date,
                        sport, 
                        team_1_id, 
                        team_2_id, 
                        team_3_id, 
                        team_4_id, 
                        team_5_id, 
                        team_6_id, 
                        team_7_id, 
                        team_8_id, 
                        team_9_id, 
                        team_10_id, 
                        team_11_id, 
                        team_12_id, 
                        team_13_id
                    } = req.body;

                    let targets = {};
                    
                    for (let i = 1; i <= teams_quantity; i++) {
                        const target = await target_controller.create()
                        targets = {
                            ...targets,
                            [`target_${i}_id`]: target
                        }
                    }

                    let tournament = await tournament_controller.create({...req.body, ...targets});
                    let matches;
                    if(teams_quantity === 4){
                        matches = await create4teamsMatches(tournament.response, date, team_1_id, team_2_id, team_3_id, team_4_id)
                    }
                    if (teams_quantity === 5){
                        matches = await create5teamsMatches(tournament.response, date, team_1_id, team_2_id, team_3_id, team_4_id, team_5_id)
                    }
                    return targets && matches && tournament
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
        )

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
        )
    }
}