import { model, Schema, Types } from 'mongoose';

const collection = 'matches';

const schema = new Schema({
  tournament_id: { type: Types.ObjectId, ref: "tournaments", required: true },
  local: {
    team_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_id: { type: Types.ObjectId, ref: "teams", required: true },
    res: { type: Number },
    type: Object,
    required: true
  },
  visit: {
    team_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_id: { type: Types.ObjectId, ref: "teams", required: true },
    res: { type: Number },
    type: Object,
    required: true
  },
  round: { type: Number, required: true },
  date: { type: String, required: true },
});

const Match = model(collection, schema);
export default Match