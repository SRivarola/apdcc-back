import Target from './models/target.model.js';

export default class TargetsMongo {
    constructor() {}

    async create(data) {
        let one = await Target.create(data);
        return one._id
    }

    async readById(id) {
        let one = Target.findById(id);
        if(one) {
            return {
                message: 'target found',
            }
        }
    }

    async update(id, data) {
        let one = await Target.findOneAndUpdate({ team_id: id }, data, { new: true });
        if(one){
            return {
                message: 'target updated',
                response: one
            }
        }
    }
}