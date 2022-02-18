const { Schema, model } = require('mongoose');


const courseSchema = new Schema({

    title: { type: String, required: true, maxlength: 100 },
    image: { type: String, required: true },
    shortDesc: { type: String, required: true, maxlength: 250 },
    content: { type: String, required: true },
    view: { type: Number, default: 0 },
    permission: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }

}, { timestamps: true });

module.exports = model("Course", courseSchema);