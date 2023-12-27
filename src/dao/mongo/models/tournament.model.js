import { model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'tournaments';

const schema = new Schema(
  {
    name: { type: String, required: true },
    teams_quantity: { type: Number, required: true },
    time: { type: String, required: true },
    day: { type: String, required: true },
    sport: { type: String, enum: ["HOCKEY", "F7", "F11"], required: true },
    category_id: { type: Types.ObjectId, ref: "categories", required: true },
    team_1_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_1_id: { type: Types.ObjectId, ref: "targets", required: true },
    team_2_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_2_id: { type: Types.ObjectId, ref: "targets", required: true },
    team_3_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_3_id: { type: Types.ObjectId, ref: "targets", required: true },
    team_4_id: { type: Types.ObjectId, ref: "teams", required: true },
    target_4_id: { type: Types.ObjectId, ref: "targets", required: true },
    team_5_id: { type: Types.ObjectId, ref: "teams" },
    target_5_id: { type: Types.ObjectId, ref: "targets" },
    team_6_id: { type: Types.ObjectId, ref: "teams" },
    target_6_id: { type: Types.ObjectId, ref: "targets" },
    team_7_id: { type: Types.ObjectId, ref: "teams" },
    target_7_id: { type: Types.ObjectId, ref: "targets" },
    team_8_id: { type: Types.ObjectId, ref: "teams" },
    target_8_id: { type: Types.ObjectId, ref: "targets" },
    team_9_id: { type: Types.ObjectId, ref: "teams" },
    target_9_id: { type: Types.ObjectId, ref: "targets" },
    team_10_id: { type: Types.ObjectId, ref: "teams" },
    target_10_id: { type: Types.ObjectId, ref: "targets" },
    team_11_id: { type: Types.ObjectId, ref: "teams" },
    target_11_id: { type: Types.ObjectId, ref: "targets" },
    team_12_id: { type: Types.ObjectId, ref: "teams" },
    target_12_id: { type: Types.ObjectId, ref: "targets" },
    team_13_id: { type: Types.ObjectId, ref: "teams" },
    target_13_id: { type: Types.ObjectId, ref: "targets" },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);
let Tournament = model(collection, schema);
export default Tournament;