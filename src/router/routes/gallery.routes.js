//importacion del router generico
import MyRouter from "../router.js";
//import cloudinary
import { v2 as cloudinary } from "cloudinary";
import env from "../../config/env.js";

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_KEY,
  api_secret: env.CLOUD_KEY_SECRET,
  secure: true,
});


export default class CloudinaryRouter extends MyRouter {
    init() {
        this.get(
            '/',
            ["PUBLIC"],
            async (req, res, next) => {
                try {
                    const { folders } = await cloudinary.api.root_folders();

                    return folders 
                        ? res.sendSuccess({
                            message: 'Folders found!',
                            response: folders
                        })
                        : res.sendNotFound('folders');
                } catch (error) {
                    next(error)
                }
            }
        );
    }
}