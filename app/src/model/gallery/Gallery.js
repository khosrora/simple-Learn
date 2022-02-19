const { Schema, model } = require('mongoose');
const { galleryValidation } = require('./galleryValidation');

const GallerySchema = new Schema({

    name: { type: String, required: true },
    fileName: { type: String, required: true },
    image: { type: String, required: true },
    thumb: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }

}, { timestamps: true });

GallerySchema.statics.galleryValidation = body => {
    return galleryValidation.validate(body)
}


module.exports = model("Gallery", GallerySchema);