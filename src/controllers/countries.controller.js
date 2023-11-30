import CountriesService from "../services/countries.service.js";

export default class CountriesController {
    constructor() {
        this.service = new CountriesService();
    };

    create = (data) => this.service.create(data);
    read = (query, data) => this.service.read(query, data);
    readAll = () => this.service.readAll();
    readOne = (id) => this.service.readOne(id);
    readById = (id) => this.service.readById(id);
    update = (id, data) => this.service.update(id, data);
    delete = (id) => this.service.delete(id);

};