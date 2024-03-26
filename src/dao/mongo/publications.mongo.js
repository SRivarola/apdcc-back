import Publication from "./models/publication.model.js";

export default class PublicatiosMongo {
    constructor() {}

    async create(data) {
        let publication = await Publication.create(data);
        return {
            message: "Publication created",
            response: publication._id
        }
    }

    async readAll(query) {
        let all = await Publication.find(query)
            .populate('location')
            .populate('list');
        if(all.length > 0) {
            return {
                message: 'Publications found',
                response: all
            }
        } else {
            return {
                message: 'Publications not found',
                response: []
            }
        }
    }

    async readById(id) {
        let one = await Publication.findById(id)
          .populate("location")
          .populate("list");
        if(one) {
            return {
                message: 'Publication found',
                response: one
            }
        } else {
            return null
        }
    }

    async delete(id) {
        let one = await Publication.findByIdAndDelete(id);
        if(one) {
            return {
                message: 'Publication deleted',
                response: one
            }
        } else {
            return null
        }
    }
}