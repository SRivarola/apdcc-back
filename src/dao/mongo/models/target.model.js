import { model, Schema, Types } from "mongoose";

const collection = "targets";

const schema = new Schema({
  red_cards: [{ type: Types.ObjectId, ref: 'players' }],
  yellow_card: { type: Number, default: 0 },
  // points: { type: Number, default: 0 },
  // wins: { type: Number, default: 0 },
  // losses: { type: Number, default: 0 },
  // ties: { type: Number, default: 0 },
  played_matches: { type: Number, default: 0 },
  message: { type: String, default: "" },
  tournament_id: { type: Types.ObjectId, ref: "tournaments", required: true },
  team_id: { type: Types.ObjectId, ref: "teams", required: true },
  match_id: { type: Types.ObjectId, ref: "matches", required: true },
});

const Target = model(collection, schema);
export default Target;