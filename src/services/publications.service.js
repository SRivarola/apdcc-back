import dao from '../dao/factory.js';

export default class PublicationsService {
    constructor() {
        this.model = new dao.Publication();
    }

    create = (data) => this.model.create(data);
    readAll = (query) => this.model.readAll(query);
    readAllWithPaginate = (query, data) => this.model.readAllWithPaginate(query, data);
    readById = (id) => this.model.readById(id);
    delete = (id) => this.model.delete(id);
}