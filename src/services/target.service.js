import dao from '../dao/factory.js';

export default class TargetsService {
    
    constructor() {
        this.model = new dao.Target();
    }

    create = (data) => this.model.create(data);
    read = (query) => this.model.read(query);
    readById = (id) => this.model.readById(id);
    update = (id, data) => this.model.update(id, data);
    delete = (id) => this.model.delete(id);

}