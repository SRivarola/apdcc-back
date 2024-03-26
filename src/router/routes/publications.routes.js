//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import PublicationsController from "../../controllers/publications.controller.js";
import form_publication_ok from "../../middlewares/form_publication_ok.js";

const controller = new PublicationsController();

export default class PublicationsRouter extends MyRouter {
    init() {
        this.post(
            '/create',
            ["ADMIN"],
            form_publication_ok,
            async (req, res, next) => {
                try {
                    const data = req.body;
                    const response = await controller.create(data);

                    return response
                        ? res.sendSuccessCreate(response)
                        : res.sendNotFound('Publications');
                } catch (error) {
                    next(error);
                }
            }
        )
    }
}