const { Schema, model } = require('mongoose');
const { channellValidation } = require('./chanellValidation');


const channelSchema = new Schema({

    name: { type: String, required: true, maxlength: 250 },
    slug: { type: String, required: true },
    shortDesc: { type: String, required: true, maxlength: 500 },
    desc: { type: String, required: true, maxlength: 1000 },
    linkAparat: { type: String, required: true },
    view: { type: Number, default: 0 },
    image: { type: Schema.Types.ObjectId, ref: "Gallery" },
    permission: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }

}, { timestamps: true });

channelSchema.statics.channellValidate = body => {
    return channellValidation.validate(body)
}

module.exports = model("Channell", channelSchema);