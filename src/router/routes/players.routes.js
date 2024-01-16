//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import PlayersController from "../../controllers/players.controller.js";
import CategoriesController from "../../controllers/categories.controller.js";
//importacion de middlewares
import is_valid_player from "../../middlewares/is_valid_player.js";
import is_playerForm_ok from "../../middlewares/is_playerForm_ok.js";
import PlayerAgeDto from "../../dto/playerAge.dto.js";
import is_quantity_ok from "../../middlewares/is_quantity_ok.js";
import out_of_category_ok from "../../middlewares/out_of_category_ok.js";
//import cloudinary
import { v2 as cloudinary } from "cloudinary";
import env from "../../config/env.js";

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_KEY,
  api_secret: env.CLOUD_KEY_SECRET,
  secure: true,
});

const controller = new PlayersController();
const catController = new CategoriesController();

export default class PlayersRouter extends MyRouter {
  init() {
    this.post(
      "/create",
      ["ADMIN", "MANAGER"],
      is_valid_player,
      is_playerForm_ok,
      async (req, res, next) => {
        try {
          const {
            first_name,
            last_name,
            genre,
            dni,
            dni_photo,
            avatar,
            year,
            country_id,
          } = req.body;

          let data = {};
          let response;

          const img_avatar_response = await cloudinary.uploader.upload(avatar, {
            folder: "photos",
            gravity: "auto",
            width: 300,
            height: 400,
            crop: "fill",
          });

          const img_dni_response = await cloudinary.uploader.upload(dni_photo, {
            folder: "photos",
          });

          if (img_avatar_response && img_dni_response) {
            data = {
              first_name: first_name.toLowerCase(),
              last_name: last_name.toLowerCase(),
              genre,
              dni,
              dni_photo: {
                url: img_dni_response.secure_url,
                public_id: img_dni_response.public_id,
              },
              avatar: {
                url: img_avatar_response.secure_url,
                public_id: img_avatar_response.public_id,
              },
              year,
            };
            
            if (req.user.role === "ADMIN") {
              data.country_id = country_id;
              response = await controller.create(data);
            } else {
              data.country_id = req.user.country_id;
              response = await controller.create(data);
            }
          }
          return response
            ? res.sendSuccessCreate(response)
            : res.sendNotFound("player");
        } catch (error) {
          next(error);
        }
      }
    );

    this.get(
      "/", 
      ["ADMIN", "MANAGER"], 
      async (req, res, next) => {
        try {
          const { page } = req.query;
          
          const headers = req.headers.queries;
          let queries = headers ? JSON.parse(headers) : {};
          const data = Object.entries(queries).reduce((acc, [key, value]) => {
            if (value !== "" && key !== "category_id") {
              acc[key] = value;
            }
            return acc;
          }, {});
          if (queries.category_id) {
            const {
              response: { name },
            } = await catController.readById(queries.category_id);
            const date = new Date().getFullYear();
            if (name === "+30") {
              const year = Number(name);
              const bornYear = date - year;
              data.year = { $lte: bornYear + 3 };
            } else {
              const year = name.split("-");
              const bornYear1 = date - Number(year[1]);
              const bornYear2 = date - Number(year[0]);
              data.year = { $gte: bornYear1, $lte: bornYear2 + 1 };
            }
          }
          
          if (req.user.role === "MANAGER") data.country_id = req.user.country_id;

          let response = await controller.read(
            data,
            {
              populate: { path: "country_id", select: "name" },
              sort: { state: "asc" },
              lean: true,
              limit: 10,
              page: page ? page : 1,
            }
          );

          if (response) {
            return res.sendSuccess(response);
          } else {
            return res.sendNotFound("Player");
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.get("/all", ["ADMIN", "MANAGER", "JUEZ"], async (req, res, next) => {
      try {
        const queries = req.query;

        const data = Object.entries(queries).reduce((acc, [key, value]) => {
          if (value !== "" && key !== "category") {
            acc[key] = value;
          }
          return acc;
        }, {});


        const date = new Date().getFullYear();
        
        if(queries.category) {
          if (queries.category != +30) {
            const year = queries.category.split("-");
            let bornYear1 = date - Number(year[1]);
            let bornYear2 = date - Number(year[0]);
            data.year = { $gte: bornYear1 , $lte: bornYear2 + 1};
          } else {
            const year = Number(queries.category);
            let bornYear = date - year;
            data.year = { $lte: bornYear + 3 };
          }
        }

        if (req.user.role === "MANAGER") data.country_id = req.user.country_id;
        
        const response = await controller.readAll(data);
        const player_data = new PlayerAgeDto(response.response);
        response.response = player_data.arr;
        
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("Player");
        }
      } catch (error) {
        next(error);
      }
    });

    this.get("/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        let response = await controller.readById(req.params.id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("Player");
        }
      } catch (error) {
        next(error);
      }
    });

    this.put(
      "/player/:id", 
      ["ADMIN", "MANAGER"], 
      async (req, res, next) => {
        try {
          let id = req.params.id;
          let data = req.body;
          
          if (data.avatar) {
            await cloudinary.uploader.destroy(player.response.avatar.public_id)
            const img_avatar_response = await cloudinary.uploader.upload(
              data.avatar,
              {
                folder: "photos",
                gravity: "auto",
                width: 300,
                height: 400,
                crop: "fill",
              }
            );
            data.avatar = {
              url: img_avatar_response.secure_url,
              public_id: img_avatar_response.public_id,
            };
          };

          if (data.dni_photo) {
            await cloudinary.uploader.destroy(player.response.dni_photo.public_id);
            const img_dni_response = await cloudinary.uploader.upload(
              data.dni_photo,
              {
                folder: "photos",
                gravity: "auto",
                width: 300,
                height: 400,
                crop: "fill",
              }
            );
            data.dni_photo = {
              url: img_dni_response.secure_url,
              public_id: img_dni_response.public_id,
            };
          };

          let response = await controller.update(id, data);

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("player");
        } catch (error) {
          next(error);
        }
      }
    );

    this.put(
      "/playerteam/:id",
      ["ADMIN", "MANAGER"],
      is_quantity_ok,
      out_of_category_ok,
      async (req, res, next) => {
        try {
          let { team, action } = req.body;
          let player = await controller.readById(req.params.id);
          let teams = player.response.team;
          let response;

          if (action === "add") {
            teams.push(team);
            response = await controller.update(req.params.id, { team: teams });
          }

          if (action === "remove") {
            const newTeams = teams.filter((item) => item != team);
            response = await controller.update(req.params.id, {
              team: newTeams,
            });
          }

          return response
            ? res.sendSuccess(response)
            : res.sendNotFound("player");
        } catch (error) {
          next(error);
        }
      }
    );

    // ACTUALIZAR BASE DE DATOS DE PLAYERS
    this.put(
      '/actualizarDB',
      ["ADMIN"],
      async (req, res, next) => {
        try {
          const data = req.body;
          const { response } = await controller.readAll();
  
          console.log(response)
          for (let i = 0; i < response.length; i++) {
            const element = response[i];
            const player = await controller.update(element._id, data)
            console.log(player)
          }
          res.sendSuccess(response)
        } catch (error) {
          next(error)
        }
      }
    );

    this.delete("/:id", ["ADMIN", "MANAGER"], async (req, res, next) => {
      try {
        let response = await controller.delete(req.params.id);

        return response ? res.sendSuccess(response) : res.sendNotFound("user");
      } catch (error) {
        next(error);
      }
    });
  }
}
