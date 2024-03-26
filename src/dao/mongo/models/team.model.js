import { model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'teams';

const schema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, enum: ['HOCKEY', 'F11', 'F7'], required: true },
    genre: { type: String, enum: ['MASCULINO', 'FEMENINO'], required: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true },
    country_id: { type: Types.ObjectId, ref: 'countries', required: true },
    manager: { type: Types.ObjectId, ref: 'users', required: true },
    players_qtty: { type: Number, required: true, default: 0 },
});

schema.plugin(mongoosePaginate)
const Team = model(collection, schema);
export default Team;