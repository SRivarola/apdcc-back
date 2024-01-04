import PopupsService from "../services/popups.service.js";

export default class PopupsController {
  constructor() {
    this.service = new PopupsService();
  }

  create = (data) => this.service.create(data);
  readById = (id) => this.service.readById(id);
  update = (id, data) => this.service.update(id, data);
}