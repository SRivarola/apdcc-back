import { model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = 'players';

const schema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    genre: { type: String, enum: ['MASCULINO', 'FEMENINO'], required: true },
    dni: { type: Number, unique: true, required: true },
    dni_photo: { 
        url: {type: String, required: true },
        public_id: { type: String, required: true },
        type: Object, required: true 
    },
    avatar: { 
        url: {type: String, required: true },
        public_id: { type: String, required: true },
        type: Object, required: true 
    },
    year: { type: Number, required: true },
    country_id: { type: Types.ObjectId, ref: 'countries', required: true },
    state: { type: String, enum: ['PENDING', 'READY'], default: 'PENDING' },
    team: [{ type: Types.ObjectId, ref: 'teams' }],
    red_cards: { type: Number, required:true, default: 0 }
})

schema.plugin(mongoosePaginate);
const Player = model(collection, schema);
export default Player;