//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import CountriesController from "../../controllers/countries.controller.js";
//importacion de middlewares
import is_valid_country from "../../middlewares/is_valid_country.js";

const controller = new CountriesController();

export default class CountriesRouter extends MyRouter {
  init() {
    this.post(
      "/create",
      ["ADMIN"],
      is_valid_country,
      async (req, res, next) => {
        try {
          const data = req.body;
          const response = await controller.create(data);

          return response
            ? res.sendSuccessCreate(response)
            : res.sendNotFound("Countries");
        } catch (error) {
          next(error);
        }
      }
    );

    this.get("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const { page } = req.query;
        const headers = req.headers.queries;
        let queries = headers ? JSON.parse(headers) : {};

        const data = Object.entries(queries).reduce((acc, [key, value]) => {
        if (key === "name") {
            acc[key] = new RegExp(value, "i");
        } else if (value !== "") {
            acc[key] = value;
        }
        return acc;
        }, {});

        const response = await controller.read(data, {
          lean: true,
          sort: { name: 1 },
          limit: 10,
          page: page ? page : 1,
        });
        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/all", ["PUBLIC"], async (req, res, next) => {
      try {
        const response = await controller.readAll();

        res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        const response = await controller.readById(req.params.id);

        return response
          ? res.sendSuccess(response)
          : res.sendNotFound("Countries");
      } catch (error) {
        next(error);
      }
    });

    this.put("/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const data = req.body;
        const response = await controller.update(id, data);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("country");
        }
      } catch (error) {
        next(error);
      }
    });

    this.delete("/:id", ["ADMIN"], async (req, res, next) => {
      try {
        const response = await controller.delete(req.params.id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("player");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
