import bcrypt from 'bcryptjs';
import User from '../dao/mongo/models/user.model.js';

export default async function (req, res, next) {
    let password_from_form = req.body.password;
    if(!req.body.mail) req.body.mail = req.user.mail
    let user = await User.findOne({ mail: req.body.mail });
    let password_hash = user.password;
    let verified = bcrypt.compareSync(password_from_form, password_hash);
     
    if(verified) {
        return next();
    } else {
        return res.status(401).json({
            status: 401,
            method: req.method,
            path: req.url,
            response: 'Invalid credentials'
        });
    };
}