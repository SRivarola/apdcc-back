import dotenv from 'dotenv';
import args from "./arguments.js";

const enviroment = args.mode;
const path = enviroment === "dev" ? "./.env.dev" : "./.env.prod";
dotenv.config({ path });

export default {
    LINK_MDB: process.env.LINK_MDB,
    SECRET_COOKIE: process.env.SECRET_COOKIE,
    SECRET_KEY: process.env.SECRET_KEY,
    SECRET_SESSION: process.env.SECRET_SESSION,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_KEY: process.env.CLOUD_KEY,
    CLOUD_KEY_SECRET: process.env.CLOUD_KEY_SECRET
}