import Country from "./models/country.model.js";

export default class CountriesMongo {
    
    constructor() {}

    async create(data) {
        const one = await Country.create(data);
        return {
            message: "Country created",
            response: one._id
        }
    };

    async read(query, data) {
        const all = await Country.paginate(query, data);
        if(all.docs.length > 0){
            return {
                message: "Countries found",
                response: all
            };
        } else {
            return {
                message: "Countries not found",
                response: {
                    "docs": [],
                    "totalDocs": 0,
                    "limit": 20,
                    "totalPages": 0,
                    "page": 0,
                    "pagingCounter": 0,
                    "hasPrevPage": false,
                    "hasNextPage": false,
                    "prevPage": null,
                    "nextPage": null
                }
            };
        };
    };

    async readAll() {
        const all = await Country.find();
        if(all.length > 0) {
            return {
                message: 'Countries found',
                response: all
            }
        } else {
            return {
                message: 'Countries not found',
                response: []
            }
        }
    };

    async readOne(name) {
        const one = await Country.findOne({ name });
        if(one){
            return {
                message: "Country found",
                response: one
            };
        }
        return null;
    };

    async readById(id) {
        const one = await Country.findById(id);
        if(one) {
            return {
                message: "Country found",
                response: one
            };
        };
        return null;
    }

    async update(id, data) {
        const one = await Country.findByIdAndUpdate(id, data, { new: true });
        if(one){
            return {
                message: "Country updated",
                response: one
            };
        }
        return null;
    };

    async delete(id) {
        const one = await Country.findByIdAndDelete(id);
        if(one) {
            return {
                message: "Country deleted",
                response: one
            };
        } 
        return null;
    };

}