import MatchesController from "../controllers/matches.controller.js";

export default async function (req, res, next) {
  try {
    const { played } = req.body;
    const { id } = req.params;

    if (!played) return next();

    if (played !== "suspended") return next();

    const controller = new MatchesController();
    
    const response = await controller.updateById(id, { played });

    return res.sendSuccess(response);
    
  } catch (error) {
    next(error);
  }
}
