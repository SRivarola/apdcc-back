import args from "../config/arguments.js";
import MongoConnect from "../config/mongo.js";
import env from "../config/env.js";

let dao = {};

switch (args.persistance) {
    case 'FS':
        console.log("file system: command");
        break;

    default: // MONGO
        const mongo = new MongoConnect(env.LINK_MDB);
        mongo.connect_mongo();

        const { default: AuthMongo } = await import('./mongo/users.mongo.js');
        const { default: CountriesMongo } = await import('./mongo/countries.mongo.js');
        const { default: PlayersMongo } = await import('./mongo/players.mongo.js');
        const { default: TeamsMongo } = await import('./mongo/teams.mongo.js');
        const { default: CategoriesMongo } = await import('./mongo/categories.mongo.js');
        const { default: TournamentsMongo } = await import('./mongo/tournament.mongo.js');
        const { default: TargetsMongo } = await import('./mongo/target.mongo.js');
        const { default: MatchesMongo } = await import('./mongo/matches.mongo.js');
        const { default: PopupsMongo } = await import('./mongo/popups.mongo.js');

        dao = { 
            User: AuthMongo, 
            Country: CountriesMongo, 
            Player: PlayersMongo, 
            Team: TeamsMongo, 
            Category: CategoriesMongo, 
            Tournament: TournamentsMongo,
            Target: TargetsMongo,
            Match: MatchesMongo,
            Popup: PopupsMongo
        };
        break;
}

export default dao;