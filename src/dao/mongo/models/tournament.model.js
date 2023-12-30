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
    team_1: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
      required: true,
    },
    team_2: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
      required: true,
    },
    team_3: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
      required: true,
    },
    team_4: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
      required: true,
    },
    team_5: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_6: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_7: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_8: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_9: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_10: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_11: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_12: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
    team_13: {
      team_id: { type: Types.ObjectId, ref: "teams", required: true },
      target_id: { type: Types.ObjectId, ref: "targets", required: true },
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);
let Tournament = model(collection, schema);
export default Tournament;