import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = 'publications';

const schema = new Schema({
    title: { type: String, required: true },
    location: { type: Types.ObjectId, ref: 'countries', required: true },
    list: [{ type: Types.ObjectId, ref: 'teams', required: true }],
    sport: { type: String, enum: ['HOCKEY', 'F7'], required: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true }
},
{
    timestamps: true,
});

schema.plugin(mongoosePaginate);
const Publication = model(collection, schema);
export default Publication;