import Category from "./models/category.model.js";

export default class CategoriesMongo {

    constructor() {}

    async create(data) {
        const one = await Category.create(data);
        return {
            message: "Category created",
            response: one._id
        };
    };

    async readAll(query) {
        const all = await Category.find(query).sort({ name: 1 });
        if(all.length > 0) {
            return {
                message: "Categories found",
                response: all
            }
        } else {
            return {
                message: "Categories not found",
                response: []
            }
        }
    };

    async readOne(name) {
        const one = await Category.findOne({ name });
        if(one) {
            return {
                message: "Category found",
                response: one
            };
        };
        return null;
    };

    async readById(id) {
        const one = await Category.findById(id);
        if(one) {
            return {
                message: "Category found",
                response: one
            };
        } 
        return null;
    };

    async update(id, data) {
        const one = await Category.findByIdAndUpdate(id, data, { new: true });
        if(one) {
            return {
                message: "Category updated",
                response: one
            };
        }
        return null
    };

}