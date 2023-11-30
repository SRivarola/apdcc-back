import dao from '../dao/factory.js';

export default class TournamentsService {
    constructor() {
        this.model = new dao.Tournament();
    }

    create = (create) => this.model.create(create);
    read = (query, data) => this.model.read(query, data);
    readById = (id) => this.model.readById(id);
    
}