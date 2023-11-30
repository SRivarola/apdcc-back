import dao from "../dao/factory.js";

export default class MatchesService {

    constructor() {
        this.model = new dao.Match();
    }

    create = (data) => this.model.create(data);
    readAll = (query) => this.model.readAll(query);
    
}