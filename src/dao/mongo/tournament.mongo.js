import Tournament from "./models/tournament.model.js";

export default class TournamentsMongo {
    constructor() {}

    async create(data) {
        let one = await Tournament.create(data);
        return {
            message: 'Tournament created',
            response: one._id
        }
    }

    async read(query, data) {
        let all = await Tournament.paginate(query, data);
        if(all.docs.length > 0) {
            return {
                message: "players found",
                response: all
            }
        } else {
            return {
                message: "Countries not found",
                response: {
                    "docs": [],
                    "totalDocs": 0,
                    "limit": 10,
                    "totalPages": 0,
                    "page": 0,
                    "pagingCounter": 0,
                    "hasPrevPage": false,
                    "hasNextPage": false,
                    "prevPage": null,
                    "nextPage": null
                }
            };
        }
    }

    async readById(id) {
        const one = await Tournament.findById(id)
          .populate([
            { path: "category_id" },
            { path: "team_1_id", populate: [{ path: "country_id" }] },
            { path: "team_2_id", populate: [{ path: "country_id" }] },
            { path: "team_3_id", populate: [{ path: "country_id" }] },
            { path: "team_4_id", populate: [{ path: "country_id" }] },
            { path: "team_5_id", populate: [{ path: "country_id" }] },
            { path: "team_6_id", populate: [{ path: "country_id" }] },
            { path: "team_7_id", populate: [{ path: "country_id" }] },
            { path: "team_8_id", populate: [{ path: "country_id" }] },
            { path: "team_9_id", populate: [{ path: "country_id" }] },
            { path: "team_10_id", populate: [{ path: "country_id" }] },
            { path: "team_11_id", populate: [{ path: "country_id" }] },
            { path: "team_12_id", populate: [{ path: "country_id" }] },
            { path: "team_13_id", populate: [{ path: "country_id" }] },
            { path: "target_1_id" },
            { path: "target_2_id" },
            { path: "target_3_id" },
            { path: "target_4_id" },
            { path: "target_5_id" },
            { path: "target_6_id" },
            { path: "target_7_id" },
            { path: "target_8_id" },
            { path: "target_9_id" },
            { path: "target_10_id" },
            { path: "target_11_id" },
            { path: "target_12_id" },
            { path: "target_13_id" },
          ]);

        if(one) {
            return {
                message: 'Tournament found',
                response: one
            };
        }
        return null;
    }
    
}