import { model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'teams';

// const categories = ['8-9', '10-11', '12-13', '14-15', '14-16', '16-18', '+30']

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    sport: { type: String, enum: ['HOCKEY', 'F11', 'F7'], required: true },
    genre: { type: String, enum: ['MASCULINO', 'FEMENINO'], required: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true },
    country_id: { type: Types.ObjectId, ref: 'countries', required: true }
});

schema.plugin(mongoosePaginate)
const Team = model(collection, schema);
export default Team;