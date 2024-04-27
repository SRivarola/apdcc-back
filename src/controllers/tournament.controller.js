import TournamentsService from "../services/tournaments.service.js";

export default class TournamentsController {
    constructor() {
        this.service = new TournamentsService();
    }

    create = (data) => this.service.create(data);
    read = (query, data) => this.service.read(query, data);
    readAll = (query) => this.service.readAll(query);
    readById = (id) => this.service.readById(id);
    update = (id, data) => this.service.update(id, data);
    delete = (id) => this.service.delete(id);
    
}