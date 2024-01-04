import dao from "../dao/factory.js";

export default class PopupsService {
  constructor() {
    this.model = new dao.Popup();
  }

  create = (data) => this.model.create(data);
  readById = (id) => this.model.readById(id);
  update = (id, data) => this.model.update(id, data);
};