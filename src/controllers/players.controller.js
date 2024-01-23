import PlayersService from "../services/players.service.js";

export default class PlayersController {

    constructor() {
        this.service = new PlayersService();
    }

    create = (data) => this.service.create(data);
    read = (query, data) => this.service.read(query, data);
    readAll = (data) => this.service.readAll(data)
    readById = (id) => this.service.readById(id);
    readOne = (data) => this.service.readOne(data);
    update = (id, data) => this.service.update(id, data);
    delete = (id) => this.service.delete(id);
    
}