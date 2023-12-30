import Match from "./models/matches.model.js";

export default class MatchesMongo {
    constructor() {}

    async create(data) {
        let one = await Match.create(data);
        return one._id
    }

    async readAll(query) {
        let all = await Match.find(query).populate([
            { 
                path: "local", 
                populate: [{ path: "team_id", model: "teams", populate:[{ path: "country_id" }] }] 
            },
            { 
                path: "visit", 
                populate: [{ path: "team_id", model: "teams", populate:[{ path: "country_id" }] } 
            },
        ]);
        
        if(all.length > 0) {
            return {
                message: 'Matches found',
                response: all
            }
        } else {
            return {
                message: 'Matches not found',
                response: []
            }
        }
    }

    async updateById(id, data) {
        let one = await Match.findByIdAndUpdate(id, data, { new: true });
        if(one) {
            return {
                message: 'match uploaded',
                response: one
            }
        } else {
            return null
        }
    }
}