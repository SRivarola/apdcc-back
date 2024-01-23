import { model, Schema, Types } from 'mongoose';

const collection = 'matches';

const schema = new Schema({
  tournament_id: { type: Types.ObjectId, ref: "tournaments", required: true },
  local: {
    team_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_id: { type: Types.ObjectId, ref: "targets", required: true },
    type: Object,
    required: true
  },
  res_local: { type: Number },
  visit: {
    team_id: { type: Types.ObjectId, ref: "teams" },
    target_id: { type: Types.ObjectId, ref: "targets" },
    type: Object || null
  },
  res_visit: { type: Number },
  round: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  fair_play: { type: Types.ObjectId, ref: "players" },
  best_player: { type: Types.ObjectId, ref: "players" }
});

const Match = model(collection, schema);
export default Match