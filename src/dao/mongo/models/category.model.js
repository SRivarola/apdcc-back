import { model, Schema } from 'mongoose';

let collection = 'categories';

let schema = new Schema({
    name: { type: String, required: true, unique: true }
});

let Category = model(collection, schema);
export default Category;