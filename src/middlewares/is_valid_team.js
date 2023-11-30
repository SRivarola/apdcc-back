import TeamsController from "../controllers/teams.controller.js";

export default async function (req, res, next) {
    try {
        const controller = new TeamsController()
        const { name } = req.body;
        let one = await controller.readOne({name: name});
        if(!one) {
            return next();
        } else {
            return res.status(400).json({
                method: req.method,
                path: req.url,
                message: 'Invalid team name',
                response: null
            })     
        }
    } catch (error) {
        return next(error);
    }
}