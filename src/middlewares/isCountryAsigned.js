import User from "../dao/mongo/models/user.model.js";

export default async function (req, res, next) {
    let { country_id, role } = req.body;

    if(role === "ADMIN" || role === "JUEZ"){
        return next();
    }
    const one = await User.find({ country_id });
    if(one.length){
        return res.json({
            success: false,
            message: 'Este country ya esta asignado'
        })
    }

    return next();
}