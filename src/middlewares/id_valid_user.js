import AuthController from "../controllers/user.controller.js";

export default async function (req, res, next) {
    try {
        const User = new AuthController()
        const { mail } = req.body;
        let one = await User.readOne(mail);
        if(!one) {
            return next()
        } else {
            return res.status(400).json({
                method: req.method,
                path: req.url,
                message: 'Invalid user',
                response: null
            })
        }
    } catch (error) {
        return next(error);
    }
}