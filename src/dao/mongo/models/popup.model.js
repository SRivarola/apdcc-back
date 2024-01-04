import { model, Schema } from 'mongoose';

let collection = 'popups';

let schema = new Schema({
    image: {
        url: { type: String },
        public_id: { type: String },
        type: Object, 
    },
    active: { type: Boolean, default: false, required: true }
});

let Popup = model(collection, schema);
export default Popup;