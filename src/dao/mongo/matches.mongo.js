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
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [
                  { path: "country_id" },
                  { path: "category_id" },
                  { path: "manager" }
                ],
              },
            ],
          },
          {
            path: "visit",
            populate: [
              {
                path: "team_id",
                model: "teams",
                populate: [
                  { path: "country_id" },
                  { path: "category_id"},
                  { path: "manager" }
                ],
              },
            ],
          },
          {
            path: "tournament_id",
            model: "tournaments"
          }
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

    async readById(id){
      let one = await Match.findById(id)
        .populate({
          path: "local",
          populate: {
            path: "team_id",
            model: "teams",
          },
        })
        .populate({
          path: "visit",
          populate: {
            path: "team_id",
            model: "teams",
          },
        })
        .populate({
          path: "best_player",
          populate: {
            path: "country_id",
          },
        })
        .populate({
          path: "fair_play",
          populate: {
            path: "country_id",
          },
        })
        .populate("tournament_id");
      if (one) {
        return {
          message: "match found",
          response: one
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

    async delete(id) {
      let one = await Match.findByIdAndDelete(id);
      if(one){
        return {
          message: 'match deleted',
          response: one
        }
      } else {
        return null;
      }
    }
}