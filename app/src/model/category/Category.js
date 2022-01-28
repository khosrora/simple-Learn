const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({

    name: { type: String, required: true },
    desc: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: "Category" }

}, { timestamps: true });



module.exports = model("Category", CategorySchema);