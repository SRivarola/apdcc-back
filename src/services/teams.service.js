import dao from '../dao/factory.js';

export default class TeamsService {
  constructor() {
    this.model = new dao.Team();
  }

  create = (data) => this.model.create(data);
  read = (query, data) => this.model.read(query, data);
  readAll = (query) => this.model.readAll(query);
  readById = (id) => this.model.readById(id);
  readOne = (name) => this.model.readOne(name);
  update = (id, data) => this.model.update(id, data);
  delete = (id) => this.model.delete(id);
}