import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'countries';

const schema = new Schema({
    name: { type: String, required: true }
});

schema.plugin(mongoosePaginate)
const Country = model(collection, schema);

export default Country;