//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import TeamsController from "../../controllers/teams.controller.js";
//importacion de middlewares
import is_valid_team from "../../middlewares/is_valid_team.js";

const controller = new TeamsController();

export default class TeamsRouter extends MyRouter {
  init() {
    this.post(
      "/create",
      ["ADMIN", "MANAGER"],
      is_valid_team,
      async (req, res, next) => {
        try {
          const data = req.body;
          let response;
          if (req.user.role === "MANAGER") {
            data.country_id = req.user.country_id;
            data.manager = req.user._id
          } 
          console.log(req.user)
          response = await controller.create(data);
          if (response) {
            return res.sendSuccessCreate(response);
          } else {
            return res.sendNotFound("Teams");
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.get(
      "/", 
      ["PUBLIC"], 
      async (req, res, next) => {
      try {
        const { page } = req.query;

        const headers = req.headers.queries;
        let queries = headers ? JSON.parse(headers) : {};

        const data = Object.entries(queries).reduce((acc, [key, value]) => {
          if (value !== "") {
            acc[key] = value;
          }
          return acc;
        }, {});

        let response;
        if (req.user?.role === "ADMIN") {
          response = await controller.read(
            data, 
            {
              populate: [
                { path: "country_id", select: "name" },
                { path: "category_id", select: "name" },
              ],
              lean: true,
              limit: 10,
              page: page ? page : 1,
            }
          );
        } else if (req.user?.role === "MANAGER") {
          data.country_id = req.user.country_id;

          response = await controller.read(
            data,
            {
              populate: [
                { path: "country_id", select: "name" },
                { path: "category_id", select: "name" },
              ],
              lean: true,
              limit: 20,
              page: page ? page : 1,
            }
          );
        }
        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/all", ["PUBLIC"], async (req, res, next) => {
      try {
        const params = req.query;
        let response = await controller.readAll(params);

        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        const response = await controller.readById(req.params.id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("team");
        }
      } catch (error) {
        next(error);
      }
    });

    this.put("/:id", ["ADMIN", "MANAGER"], async (req, res, next) => {
      try {
        const { id } = req.params;
        const data = req.body;
        const response = await controller.update(id, data);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("team");
        }
      } catch (error) {
        next(error);
      }
    });

    this.delete("/:id", ["ADMIN", "MANAGER"], async (req, res, next) => {
      try {
        const response = await controller.delete(req.params.id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("team");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
