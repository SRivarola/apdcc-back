import dao from "../dao/factory.js";

export default class CategoriesService {

    constructor() {
        this.model = new dao.Category();
    }

    create = (data) => this.model.create(data);
    readAll = () => this.model.readAll();
    readOne = (name) => this.model.readOne(name);
    readById = (id) => this.model.readById(id);
    update = (id, data) => this.model.update(id, data);

}