import { model, Schema, Types } from 'mongoose';

const collection = 'matches';

const schema = new Schema({
    tournament_id: { type: Types.ObjectId, ref: 'tournaments', required: true },
    local_id: { type: Types.ObjectId, ref: 'teams', required: true },
    visit_id: { type: Types.ObjectId, ref: 'teams', required: true },
    round: { type: Number, required: true },
    date: { type: String, required: true},
    local_res: { type: Number },
    visit_res: { type: Number }
});

const Match = model(collection, schema);
export default Match