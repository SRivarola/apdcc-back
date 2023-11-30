import TargetsService from "../services/target.service.js";

export default class TargetsController {

    constructor() {
        this.service = new TargetsService();
    }

    create = (data) => this.service.create(data);
    readById = (id) => this.service.readById(id);
    update = (id, data) => this.service.update(id, data);

}