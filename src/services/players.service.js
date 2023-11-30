import dao from '../dao/factory.js';

export default class PlayersService {

    constructor() {
        this.model = new dao.Player();
    }

    create = (data) => this.model.create(data);
    read = (query, data) => this.model.read(query, data);
    readAll = (query) => this.model.readAll(query);
    readById = (id) => this.model.readById(id);
    readOne = (data) => this.model.readOne(data);
    update = (id, data) => this.model.update(id, data);
    delete = (id) => this.model.delete(id);
    
}