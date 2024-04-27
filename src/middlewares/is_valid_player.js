import PlayersController from "../controllers/players.controller.js";

export default async function (req, res, next) {
    try {
        const player = new PlayersController();
        const { dni } = req.body;
        let one = await player.readOne({ dni: dni });
        if(!one) {
            return next()
        } else {
            return res.status(400).json({
                method: req.method,
                path: req.url,
                message: 'Invalid player dni',
                code: 1,
                response: one
            })
        }
    } catch (error) {
        return next(error);
    };
};