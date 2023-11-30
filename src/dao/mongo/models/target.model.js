import { model, Schema } from 'mongoose';

const collection = 'targets';

const schema = new Schema({
       red_card: { type: Number, default: 0 },
       yellow_card: { type: Number, default: 0 },
       points: { type: Number, default: 0 },
       wins: { type: Number, default: 0 },
       losses: { type: Number, default: 0 },
       ties: { type: Number, default: 0 },
       played_matches: { type: Number, default: 0 }
});

const Target = model(collection, schema);
export default Target;