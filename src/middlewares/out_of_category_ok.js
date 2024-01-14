import PlayersController from "../controllers/players.controller.js";
import TeamsController from "../controllers/teams.controller.js";

export default async function (req, res, next) {
    try {
        const { team, action } = req.body;

        if (action === "remove") return next();

        const teamsController = new TeamsController();

        const { response: teamRes } = await teamsController.readById(team);

        if(teamRes.category_id.name != '+30') next();

        const playersController = new PlayersController();

        const date = new Date().getFullYear();
        const bornYear = date - Number(teamRes.category_id.name)

        const { response } = await playersController.readAll({ team, year: { $gt: bornYear, $lte: bornYear + 3 } });
        
        if (response.length < 2) return next()

        return res.status(400).json({
          method: req.method,
          path: req.url,
          message: `No se puede ingresar más de 2 jugadoras menores de ${teamRes.category_id.name}`,
          response: null,
        });
        
    } catch (error) {
        return next(error);
    }
}