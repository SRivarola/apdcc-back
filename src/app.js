import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';

import env from './config/env.js'
import sessions from './config/session/factory.js';

import initializePassport from './middlewares/passport.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import __dirname from './utils.js';
import expressFileUpload from "express-fileupload";

import IndexRouter from './router/index.routes.js';
const router = new IndexRouter();

const server = express();

//middlewares
server.use(cookieParser(env.SECRET_COOKIE));
server.use(sessions);
initializePassport();
server.use(passport.initialize());
server.use(passport.session());
server.use(morgan('dev'))
const corsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
    "Custom-Header",
    "Access-Control-Allow-Origin",
  ],
  credentials: true, // this allows to send back (to client) cookies
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "https://apdcc.vercel.app",
  preflightContinue: false,
};
server.options("*", cors(corsOptions));

// server.use(cors());
server.use(express.json());
server.use(expressFileUpload())
server.use(express.static((`${__dirname}/public`)))
server.use(express.urlencoded({ extended: true }));
server.use('/api', router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

export default server;