const { Schema, model } = require('mongoose');

const GallerySchema = new Schema({
    
    name: { type: String, required: true },
    fileName: { type: String, required: true },
    link: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }

}, { timestamps: true });



module.exports = model("Gallery", GallerySchema);