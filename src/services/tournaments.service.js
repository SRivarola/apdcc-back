import dao from '../dao/factory.js';

export default class TournamentsService {
    constructor() {
        this.model = new dao.Tournament();
    }

    create = (create) => this.model.create(create);
    read = (query, data) => this.model.read(query, data);
    readAll = (query) => this.model.readAll(query);
    readById = (id) => this.model.readById(id);
    update = (id, data) => this.model.update(id, data);
    delete = (id) => this.model.delete(id);
    
}