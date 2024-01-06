import CategoriesService from "../services/categories.service.js";

export default class CategoriesController {
    constructor() {
        this.service = new CategoriesService();
    };

    create = (data) => this.service.create(data);
    readAll = (query) => this.service.readAll(query);
    readOne = (name) => this.service.readOne(name);
    readById = (id) => this.service.readById(id);
    update = (id, data) => this.service.update(id, data);

}