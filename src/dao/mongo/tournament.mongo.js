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
        const one = await Tournament.findById(id).populate([
          { path: "category_id" },
          {
            path: "team_1",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_2",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_3",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_4",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_5",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_6",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_7",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_8",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_9",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_10",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_11",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_12",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
          {
            path: "team_13",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [{ path: "country_id" }],
              },
              { path: "target_id", model: "targets" },
            ],
          },
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