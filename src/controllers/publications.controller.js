import PublicationsService from "../services/publications.service.js";

export default class PublicationsController {
  constructor() {
    this.service = new PublicationsService();
  }

  create = (data) => this.service.create(data);
  readAll = (query) => this.service.readAll(query);
  readAllWithPaginate = (query, data) => this.service.readAllWithPaginate(query, data);
  readById = (id) => this.service.readById(id);
  update = (id, data) => this.service.update(id, data);
  delete = (id) => this.service.delete(id);
}