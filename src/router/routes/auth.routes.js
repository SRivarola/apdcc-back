//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import AuthController from "../../controllers/user.controller.js";
//importacion de passport 
import passport from "passport";

//importacion de middlewares
import is_registerForm_ok from "../../middlewares/is_registerForm_ok.js";
import is_8_char from "../../middlewares/is_8_char.js";
// import create_hash from "../../middlewares/create_hash.js";
import is_valid_pass from "../../middlewares/is_valid_pass.js";
import create_token from "../../middlewares/create_token.js";
import is_user from "../../middlewares/is_user.js";
import id_valid_user from "../../middlewares/id_valid_user.js";
import loginDto from "../../dto/dataUser.dto.js";

const controller = new AuthController()

export default class AuthRouter extends MyRouter {
    init() {

        this.post(
            '/register', 
            ["ADMIN"], 
            is_registerForm_ok, 
            is_8_char, 
            id_valid_user,
            async (req, res, next) => {
                try {
                    let data = req.body
                    let response = await controller.register(data)
                    if(response) {
                        return res.sendSuccessCreate(response)
                    } else {
                        return res.sendNotFound('User')
                    }
                } catch (error) {
                    next(error);
                };
            }
        );

        this.post(
            '/login', 
            ['PUBLIC'], 
            is_8_char, 
            is_user, 
            is_valid_pass, 
            create_token, 
            async (req, res, next) => {
                try {
                    req.session.mail = req.body.mail;
                    req.session.role = req.user.role;
                    let userData = new loginDto(req.user)
                    return res
                      .status(200)
                      .cookie("token", req.session.token, {
                        maxAge: 60 * 60 * 24 * 7 * 1000,
                        httpOnly: true,
                        path: "/",
                        domain: "https://apdcc.vercel.app",
                        sameSite: "none",
                      })
                      .json({
                        success: true,
                        user: userData,
                        message: req.session.mail + " has started session",
                      });
                } catch (error) {
                    next(error);
                }
            }
        );

        this.post(
            '/signout',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    req.session.destroy();
                    let response = await controller.signout();
                    if(response) {
                        return res.clearCookie('token').sendSuccess(response)
                    } else {
                        return res.clearCookie('token').sendNotFound('user');
                    }
                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/current', 
            ['PUBLIC'], 
            passport.authenticate('current'), 
            async (req, res, next) => {
                try {
                    let userData = new loginDto(req.user)
                    return res.sendSuccess({
                        success: true,
                        user: userData
                    })
                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/all',
            ["ADMIN"],
            async (req, res, next) => {
                try {
                    const { title, page } = req.query;
                    const lookfor = new RegExp(title, 'i');

                    const response = await controller.readAll(title ? {title: lookfor} : {}, { populate: { path: 'country', select: 'name' }, lean: true, limit: 10, page: page ? page : 1 });
            
                    return res.sendSuccess(response) 
                    
                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/bycountry/:id',
            ["ADMIN"],
            async (req, res, next) => {
                try {
                    let { id } = req.params;
                    let response = await controller.readByCountry(id);
                    return res.sendSuccess(response)
                } catch (error) {
                    next(error);
                }
            }
        )

        this.put(
            '/:id',
            ['ADMIN', 'MANAGER', 'JUEZ'],
            async (req, res, next) => {
                try {
                    let { id } = req.params;
                    let data = req.body;
                    let response = await controller.update(id, data)
                    return response 
                        ? res.sendSuccess(response)
                        : res.sendNotFound('user')
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
                    let { id } = req.params;
                    let response = await controller.delete(id);
                    if(response) {
                        res.sendSuccess(response);
                    } else {
                        res.sendNotFound('user')
                    }
                } catch (error) {
                    next(error);
                }
            }
        )

    }
};