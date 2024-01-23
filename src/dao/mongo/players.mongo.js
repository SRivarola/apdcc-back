import Player from "./models/player.model.js";

export default class PlayersMongo {
    constructor() {}

    async create(data) {
        let one = await Player.create(data)
        return {
            message: 'player created',
            response:  one._id
        }
    }

    async read(query, data) {
        let all = await Player.paginate(query, data)
        if(all.docs.length > 0) {
            return {
                message: "players found",
                response: all
            }
        } else {
            return {
              message: "players not found",
              response: {
                docs: [],
                totalDocs: 0,
                limit: 10,
                totalPages: 0,
                page: 0,
                pagingCounter: 0,
                hasPrevPage: false,
                hasNextPage: false,
                prevPage: null,
                nextPage: null,
              },
            };
        }
    }

    async readAll(data) {
        let all = await Player.find(data);
        if(all.length > 0) {
            return {
                message: "players found",
                response: all
            }
        } else {
            return {
                message: "Players not found",
                response: []
            }
        }
    }

    async readById(id) {
        let one = await Player.findById(id);
        if(one) {
            return {
                message: "player found",
                response: one
            }
        } 
    }

    async readOne(data) {
        let one = await Player.findOne(data)
        if(one) {
            return {
                message: "player found",
                response: one
            }
        } else {
            return null
        }
    }

    async update(id, data) {
        let one = await Player.findByIdAndUpdate(id, data, { new: true });
        if(one) {
            return {
                message: 'player updated',
                response: one
            }
        }
    }

    async delete(id) {
        let one = await Player.findByIdAndDelete(id);
        if(one) {
            return {
                message: 'Player deleted',
                response: one
            }
        } else {
            return null
        }
    }

}