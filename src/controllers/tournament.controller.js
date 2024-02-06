import TournamentsService from "../services/tournaments.service.js";

export default class TournamentsController {
    constructor() {
        this.service = new TournamentsService();
    }

    create = (data) => this.service.create(data);
    read = (query, data) => this.service.read(query, data);
    readById = (id) => this.service.readById(id);
    delete = (id) => this.service.delete(id);
    
}