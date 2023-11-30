import CountriesController from "../controllers/countries.controller.js";

export default async function (req, res, next) {
    try {
        const controller = new CountriesController();
        const { name } = req.body;
        let one = await controller.readOne(name)
        if(!one){
            return next()
        }
        return res.status(400).json({
            method: req.method,
            path: req.url,
            message: 'Invalid country name',
            response: null
        })
    } catch (error) {
        return next(error);
    }
}