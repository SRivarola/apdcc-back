import TeamsService from "../services/teams.service.js";

export default class TeamsController {
  constructor() {
    this.service = new TeamsService();
  }

  create = (data) => this.service.create(data);
  read = (query, data) => this.service.read(query, data);
  readAll = (query) => this.service.readAll(query);
  readById = (id) => this.service.readById(id);
  readOne = (name) => this.service.readOne(name);
  update = (id, data) => this.service.update(id, data);
  delete = (id) => this.service.delete(id);
}