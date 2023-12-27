//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import MatchesController from "../../controllers/matches.controller.js";
import moment from "moment";

const controller = new MatchesController();

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

        this.put(
            "/tournament/:id",
            ["ADMIN"],
            async (req, res, next) => {
                try {
                    const { id } = req.params;
                    const { round } = req.body;
    
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
        )

    }
}