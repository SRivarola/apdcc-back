import CategoriesController from "../controllers/categories.controller.js";

export default async function (req, res, next) {
    try {
        const controller = new CategoriesController();
        const { name } = req.body;
        let one = await controller.readOne(name);
        if(!one) {
            return next()
        }
        return res.status(400).json({
            method: req.method,
            path: req.url,
            message: 'Invalid category name',
            response: null
        })
    } catch (error) {
        next(error);
    }
}