const { Schema, model } = require('mongoose');
const { userValidation } = require('./userValidation');

const bcrypt = require('bcrypt');

const userSchema = new Schema({

    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    isBloocked: { type: Boolean, default: false },
    isAdmin: { type: String, enum: ["User", "Admin"], default: "User" },
    role: { type: String, default: "Client", enum: ["Manager", "Assistant", "Client"] },
    mobileActiveCode: { type: Number, required: true },
    isMobileActive: { type: Boolean, default: false },
    Newsletters: { type: Number, default: 0 },
    isSendChannell: { type: Boolean, required: true, default: false },
    fav: [{ type: Schema.Types.ObjectId, ref: "Product" }],

}, { timestamps: true });


userSchema.statics.userValidate = body => {
    return userValidation.validate(body)
}

userSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    })
});





module.exports = model("User", userSchema);