//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import AuthController from "../../controllers/user.controller.js";
//importacion de passport
import passport from "passport";

//importacion de middlewares
import is_registerForm_ok from "../../middlewares/is_registerForm_ok.js";
import is_8_char from "../../middlewares/is_8_char.js";
import is_valid_pass from "../../middlewares/is_valid_pass.js";
import create_token from "../../middlewares/create_token.js";
import is_user from "../../middlewares/is_user.js";
import id_valid_user from "../../middlewares/id_valid_user.js";
import loginDto from "../../dto/dataUser.dto.js";

import bcrypt from "bcryptjs";

const controller = new AuthController();

export default class AuthRouter extends MyRouter {
  init() {
    this.post(
      "/register",
      ["ADMIN"],
      is_registerForm_ok,
      is_8_char,
      id_valid_user,
      async (req, res, next) => {
        try {
          let data = req.body;
          console.log(data)
          let response = await controller.register(data);
          if (response) {
            return res.sendSuccessCreate(response);
          } else {
            return res.sendNotFound("User");
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.post(
      "/login",
      ["PUBLIC"],
      is_8_char,
      is_user,
      is_valid_pass,
      create_token,
      async (req, res, next) => {
        try {
          req.session.mail = req.body.mail;
          req.session.role = req.user.role;

          let userData = new loginDto(req.user);
          return res
            .status(200)
            .cookie("apdcc_token", req.session.token, {
              maxAge: 60 * 60 * 24 * 7 * 1000,
              httpOnly: true,
            })
            .json({
              success: true,
              user: userData,
              token: req.session.token,
              message: req.session.mail + " has started session",
            });
        } catch (error) {
          next(error);
        }
      }
    );

    this.post("/signout", ["PUBLIC"], async (req, res, next) => {
      try {
        req.session.destroy();
        let response = await controller.signout();
        if (response) {
          return res.clearCookie("apdcc_token").sendSuccess(response);
        } else {
          return res.clearCookie("apdcc_token").sendNotFound("user");
        }
      } catch (error) {
        next(error);
      }
    });

    this.post(
      "/current",
      ["PUBLIC"],
      passport.authenticate("current"),
      async (req, res, next) => {
        try {
          let userData = new loginDto(req.user);
          return res.sendSuccess({
            success: true,
            user: userData,
          });
        } catch (error) {
          next(error);
        }
      }
    );

    this.get("/all", ["PUBLIC"], async (req, res, next) => {
      try {
        if (req.user.role !== "ADMIN") {
          return res.sendNotAuthorizedError();
        }
        const { page } = req.query;
        const headers = req.headers.queries;
        let queries = headers ? JSON.parse(headers) : {};

        const data = Object.entries(queries).reduce((acc, [key, value]) => {
          if (value !== "" && key !== "category_id") {
            acc[key] = value;
          }
          return acc;
        }, {});

        const response = await controller.readAll(data, {
          populate: { path: "country_id", select: "name" },
          lean: true,
          limit: 10,
          page: page ? page : 1,
        });

        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.get("/bycountry/:id", ["ADMIN"], async (req, res, next) => {
      try {
        let { id } = req.params;
        let response = await controller.readByCountry(id);
        return res.sendSuccess(response);
      } catch (error) {
        next(error);
      }
    });

    this.put(
      "/pass",
      ["ADMIN", "MANAGER"],
      is_valid_pass,
      async (req, res, next) => {
        try {
          let { newPass } = req.body;
          const password = bcrypt.hashSync(newPass, bcrypt.genSaltSync(10));
          const { _id } = req.user;

          let response = await controller.update(_id, { password });
          
          return response ? res.sendSuccess({ 
            message: "Pass updated successfully",
            response: true
          }) : res.sendNotFound("user");
        } catch (error) {
          next(error);
        }
      }
    );

    this.put("/:id", ["ADMIN"], async (req, res, next) => {
      try {
        let { id } = req.params;
        let body = req.body;
        const data = Object.entries(body).reduce((acc, [key, value]) => {
          if (value !== "") {
            acc[key] = value;
          }
          return acc;
        }, {});
        let response = await controller.update(id, data);
        return response ? res.sendSuccess(response) : res.sendNotFound("user");
      } catch (error) {
        next(error);
      }
    });

    this.delete("/:id", ["ADMIN"], async (req, res, next) => {
      try {
        let { id } = req.params;
        let response = await controller.delete(id);
        if (response) {
          res.sendSuccess(response);
        } else {
          res.sendNotFound("user");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
