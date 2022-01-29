const User = require('../../../model/user/User');



const userController = {
    // ? Method ==> GET
    // ? Desc ==>  get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.render("pages/users/allUser", {
                title: "پنل مدیریت || کاربران",
                bread: "کاربران",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                users
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  change is bloock
    isBloock: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if (user.isBloocked) {
                user.isBloocked = false;
                user.save();
                req.flash("success", "وضعیت کاربر به مجاز تغییر کرد");
                return res.redirect("/admin/allUsers");
            }
            user.isBloocked = true;
            user.save();
            req.flash("error", "وضعیت کاربر به مسدود تغییر کرد");
            return res.redirect("/admin/allUsers");
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  change is bloock
    isAdmin: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if (user.isAdmin === "User") {
                user.isAdmin = "Admin";
                user.save();
                req.flash("success", "وضعیت کاربر به مدیر تغییر کرد");
                return res.redirect("/admin/allUsers");
            }
            user.isAdmin = "User";
            user.save();
            req.flash("error", "وضعیت  به کاربر تغییر کرد");
            return res.redirect("/admin/allUsers");
        } catch (err) {
            console.log(err.message);
        }
    },
}


module.exports = userController;