//importacion del router generico
import MyRouter from "../router.js";
//importacion de controladores
import MatchesController from "../../controllers/matches.controller.js";

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
        )

    }
}