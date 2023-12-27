import MatchesService from "../services/matches.service.js";

export default class MatchesController {
  constructor() {
    this.service = new MatchesService();
  }

  create = (data) => this.service.create(data);
  readAll = (query) => this.service.readAll(query);
  updateById = (id, data) => this.service.updateById(id, data);
}