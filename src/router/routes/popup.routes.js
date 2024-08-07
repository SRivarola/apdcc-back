//importacion del router generico
import MyRouter from "../router.js";
//importacion del controlador
import PopupsController from "../../controllers/popups.controller.js";
//import cloudinary
import { v2 as cloudinary } from "cloudinary";
import env from "../../config/env.js";

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_KEY,
  api_secret: env.CLOUD_KEY_SECRET,
  secure: true,
});

const controller = new PopupsController();

export default class PopupsRouter extends MyRouter {
  init() {
    // CREACION DEL POPUP SOLO LO USE UNA VEZ DESDE AHORA SOLO SE EDITA EL MISMO POPUP
    // this.post(
    //     '/',
    //     ["ADMIN"],
    //     async (req, res, next) => {
    //         try {
    //             const response = await controller.create();

    //             return res.sendSuccessCreate(response);
    //         } catch (error) {
    //             next(error);
    //         }
    //     }
    // );

    this.get("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const response = await controller.readById("66424dce2f64d7f8d1e155f7");

        return response ? res.sendSuccess(response) : res.sendNotFound("popup");
      } catch (error) {
        next(error);
      }
    });

    this.put("/", ["ADMIN"], async (req, res, next) => {
      try {
        const body = req.body;
        const data = {};

        if (body.image) {
          const lastPic = await controller.readById("66424dce2f64d7f8d1e155f7");
          if (lastPic?.response?.image?.public_id) await cloudinary.uploader.destroy(lastPic.response.image.public_id);
          
          const img_response = await cloudinary.uploader.upload(body.image, {
            folder: "photos",
          });
          data.image = {
            url: img_response.secure_url,
            public_id: img_response.public_id
          }
        }
        if (body.active == "true") data.active = true;
        if (body.active == "false") data.active = false;

        const response = await controller.update("66424dce2f64d7f8d1e155f7", data);

        return response
            ? res.sendSuccess(response)
            : res.sendNotFound('popup')
      } catch (error) {
        next(error);
      }
    });
  }
}
