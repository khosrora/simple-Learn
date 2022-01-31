const { Schema, model } = require('mongoose');


const channelSchema = new Schema({

    name: { type: String, required: true, maxlength: 250 },
    shortDesc: { type: String, required: true, maxlength: 500 },
    desc: { type: String, required: true, maxlength: 1000 },
    linkAparat: { type: String, required: true },
    image: { type: String, required: true },
    view: { type: Number, default: 0 },
    permission: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, required: true }

}, { timestamps: true });

module.exports = model("Channel", channelSchema);