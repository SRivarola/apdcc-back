import Popup from "./models/popup.model.js";

export default class PopupsMongo {

    constructor() {}

    async create(data) {
        const one = await Popup.create(data);
        return {
            message: "Popups created",
            response: one._id
        };
    };

    async readById(id) {
        const one = await Popup.findById(id);
        if (one) {
            return {
                message: "Popups found",
                response: one
            };
        };
    };

    async update(id, data) {
        const one = await Popup.findByIdAndUpdate(id, data, { new: true});
        if (one) {
            return {
                message: "Popups updated",
                response: one
            }
        }
    };

};