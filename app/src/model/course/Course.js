const { Schema, model } = require('mongoose');
const { courseValidation } = require('./courseValidation');


const courseSchema = new Schema({

    title: { type: String, required: true, maxlength: 100 },
    image: { type: String, required: true },
    url: { type: String, required: true },
    shortDesc: { type: String, required: true, maxlength: 250 },
    content: { type: String, required: true },
    view: { type: Number, default: 0 },
    permission: { type: Boolean, default: false },
    channell: { type: Schema.Types.ObjectId, required: true, ref: "Channell" }

}, { timestamps: true });

courseSchema.statics.courseValidate = body => {
    return courseValidation.validate(body);
}

module.exports = model("Course", courseSchema);