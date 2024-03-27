//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import PublicationsController from "../../controllers/publications.controller.js";
import form_publication_ok from "../../middlewares/form_publication_ok.js";

const controller = new PublicationsController();

export default class PublicationsRouter extends MyRouter {
  init() {
    this.post(
      "/create",
      ["ADMIN"],
      form_publication_ok,
      async (req, res, next) => {
        try {
          const data = req.body;
          const response = await controller.create(data);

          return response
            ? res.sendSuccessCreate(response)
            : res.sendNotFound("Publications");
        } catch (error) {
          next(error);
        }
      }
    );

    this.get("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const { page } = req.query;

        const response = await controller.readAllWithPaginate(
          {},
          {
            populate: [
              { path: "location", select: "name" },
              { path: "category_id", select: "name" },
            ],
            sort: { created_at: 1 },
            lean: true,
            limit: 10,
            page: page ? page : 1,
          }
        );

        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get(
      '/all',
      ['PUBLIC'],
      async (req, res, next) => {
        try {
          const response = await controller.readAll();

          return res.sendSuccess(response);
        } catch (error) {
          next(error);
        }
      }
    );
    
    this.delete(
      '/:id',
      ["ADMIN"],
      async (req, res, next) => {
        try {
          const { id } = req.params;

          console.log('first')
          
          const response = await controller.delete(id);

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound('publication');
        } catch (error) {
          next(error);
        }
      }
    )
  }

}
