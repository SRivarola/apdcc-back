import { model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'users';

const schema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mail: { type: String, unique: true, index: true, requied: true },
    password: { type: String, requied: true },
    role: { type: String, enum: ['ADMIN', 'MANAGER', 'JUEZ'], required: true },
    country_id: { type: Types.ObjectId, ref: 'countries' },
    phone: { type: Number }
});

schema.plugin(mongoosePaginate)
const User = model(collection, schema);

export default User;