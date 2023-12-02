//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import PlayersController from "../../controllers/players.controller.js";
//importacion de middlewares
import is_valid_player from "../../middlewares/is_valid_player.js";
import is_playerForm_ok from "../../middlewares/is_playerForm_ok.js";
import PlayerAgeDto from "../../dto/playerAge.dto.js";
import is_quantity_ok from "../../middlewares/is_quantity_ok.js";
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
              first_name,
              last_name,
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
              data.country_id = req.user.country;
              response = await controller.create(data);
            }
          }

          return response
            ? res.sendSuccessCreate(response)
            : res.sendNotFound("Country");
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
          const { state, team, page, category } = req.query;

          const lookforState = state && new RegExp(state, "i");
          const lookforTeam = team && new RegExp(team, "i");

          let bornYear;
          if (category) {
            const date = new Date().getFullYear();
            const year = Number(category.split("-")[1]);
            bornYear = date - year - 1;
          }
       
          let response;
          if (req.user.role === "ADMIN") {
            response = await controller.read(
              team && state && category
                ? { team: lookforTeam, state: lookforState }
                : team
                ? { team: lookforTeam }
                : state
                ? { state }
                : category
                ? { year: { $lte: bornYear + 2 } }
                : {},
              {
                populate: { path: "country_id", select: "name" },
                lean: true,
                limit: 10,
                page: page ? page : 1,
              }
              );
            
          } else if (req.user.role === "MANAGER") {
            const country_id = req.user.country;
            response = await controller.read(
              // team && state
              //     ? {team, state, country_id}
              // : team
              //     ? { team, country_id }
              // : state
              //     ? { state, country_id }
              // :
              category && state
                ? { year: { $gt: bornYear, $lte: bornYear + 2 }, country_id, state }
                : { country_id },
              {
                populate: { path: "country_id", select: "name" },
                lean: true,
                limit: 10,
                page: page ? page : 1,
              }
            );
          }

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

    this.get("/all", ["PUBLIC"], async (req, res, next) => {
      try {
        
        const { state, team, category, genre } = req.query;

        let bornYear;
        if (category) {
          const date = new Date().getFullYear();
          const year = Number(category.split("-")[1]);
          console.log(year)
          bornYear = date - year;
        }
        console.log(bornYear)
        let response;
        if (req.user.role === "ADMIN") {
          response = await controller.readAll(
            // team && state && category
            //   ? { team , state }
            //   : team
            //   ? { team }
            //   : state
            //   ? { state }
            //   : category
            //   ? { year: { $gte: bornYear, $lte: bornYear + 2 } }
            { year: { $gte: bornYear, $lte: bornYear + 2 }, state }
          );
          const data = new PlayerAgeDto(response.response);
          response.response = data.arr;
        } else if (req.user.role === "MANAGER") {
          const country_id = req.user.country;
          response = await controller.readAll(
            category && state && genre
              ? {
                  year: { $gte: bornYear, $lte: bornYear + 2 },
                  country_id,
                  state,
                  genre,
                }
              : { country_id }
          );
          const data = new PlayerAgeDto(response.response);
          response.response = data.arr;
        }

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

    this.put("/player/:id", ["ADMIN", "MANAGER"], async (req, res, next) => {
      try {
        let id = req.params.id;
        let data = req.body;
        const player = await controller.readById(id);
        
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
        }
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
        }
        let response = await controller.update(id, data);

        return response
          ? res.sendSuccess(response)
          : res.sendNotFound("player");
      } catch (error) {
        next(error);
      }
    });

    this.put(
      "/playerteam/:id",
      ["ADMIN", "MANAGER"],
      is_quantity_ok,
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
