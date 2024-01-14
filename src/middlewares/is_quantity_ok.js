import PlayersController from "../controllers/players.controller.js";

export default async function (req, res, next) {
    try {
        const { team, action } = req.body;
        
        if(action === 'remove') return next();
        
        const controller = new PlayersController();
        const all = await controller.readAll({team})

        if(all.response.length < 35) return next();
        
        return res.status(400).json({
            method: req.method,
            path: req.url,
            message: "No se puede ingresar más de 35 jugadores",
            response: null,
        });
        
    } catch (error) {
        return next(error);
    }
}