import passport from 'passport';
import jwt from 'passport-jwt';
// import User from "../dao/mongo/models/user.model.js";
import AuthService from '../services/user.service.js';

const User = new AuthService()

export default function () {

    passport.serializeUser((user, done) => {
        done(null, user._id)
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.readById(id);
        return done(null, user);
    });

    passport.use(
      "current",
      new jwt.Strategy(
        {
          jwtFromRequest: jwt.ExtractJwt.fromExtractors([
            (req) => {
                let token = req?.headers.token || req.cookies.apdcc_token;
                return token
            }
          ]),
          secretOrKey: process.env.SECRET_KEY,
        },
        async (payload, done) => {
          try {
            let user = await User.readOne(payload.mail);
            if (user) {
              done(null, user);
            } else {
              done(null);
            }
          } catch (error) {
            done(error);
          }
        }
      )
    );

}