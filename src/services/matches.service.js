import dao from "../dao/factory.js";

export default class MatchesService {
  constructor() {
    this.model = new dao.Match();
  }

  create = (data) => this.model.create(data);
  readAll = (query) => this.model.readAll(query);
  readWithPagination = (query, data) => this.model.readWithPagination(query, data);
  readById = (id) => this.model.readById(id);
  updateById = (id, data) => this.model.updateById(id, data);
  delete = (id) => this.model.delete(id);
}