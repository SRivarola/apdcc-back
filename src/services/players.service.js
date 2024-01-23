import dao from '../dao/factory.js';

export default class PlayersService {

    constructor() {
        this.model = new dao.Player();
    }

    create = (data) => this.model.create(data);
    read = (query, data) => this.model.read(query, data);
    readAll = (data) => this.model.readAll(data);
    readById = (id) => this.model.readById(id);
    readOne = (data) => this.model.readOne(data);
    update = (id, data) => this.model.update(id, data);
    delete = (id) => this.model.delete(id);
    
}