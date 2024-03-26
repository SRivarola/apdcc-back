import { model, Schema, Types } from "mongoose";

const collection = 'publications';

const schema = new Schema({
    title: { type: String, required: true },
    location: { type: Types.ObjectId, ref: 'countries', required: true },
    list: [{ type: Types.ObjectId, ref: 'teams', required: true }],
    sport: { type: String, enum: ['HOCKEY', 'FUTBOL'], required: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true }
});

const Publication = model(collection, schema);
export default Publication;