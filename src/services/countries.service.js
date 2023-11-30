import dao from "../dao/factory.js";

export default class CountriesService {

    constructor() {
        this.model = new dao.Country()
    };

    create = (data) => this.model.create(data);
    read = (query, data) => this.model.read(query, data);
    readAll = () => this.model.readAll();
    readOne = (name) => this.model.readOne(name);
    readById = (id) => this.model.readById(id);
    update = (id, data) => this.model.update(id, data);
    delete = (id) => this.model.delete(id);

}