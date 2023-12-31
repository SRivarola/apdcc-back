import Target from './models/target.model.js';

export default class TargetsMongo {
    constructor() {}

    async create(data) {
        let one = await Target.create(data);
        return one._id
    }

    async readById(id) {
        let one = await Target.findById(id);
        if(one) {
            return {
                message: 'target found',
                response: one
            }
        }
    }

    async update(id, data) {
        let one = await Target.findByIdAndUpdate(id, data, { new: true });
        if(one){
            return {
                message: 'target updated',
                response: one
            }
        }
    }
}