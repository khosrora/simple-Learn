const passport = require('passport');
const nanoId = require('./../../../../utilities/helpers/nanoId');

const User = require('../../../model/user/User');


const userController = {

    // ? method ===> GET 
    // ? desc ===> register page 
    registerPage: async (req, res) => {
        try {
            const formData = req.flash("formData")[0];
            res.render("auth/register", {
                title: "ثبت نام",
                layout: "layout/authLayout.ejs",
                error: req.flash("error"),
                formData,

            })
        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> POST 
    // ? desc ===> register User 
    registerUser: async (req, res) => {
        try {
            // ! get body
            const { fullname, email, mobile, password } = req.body;
            // ! validation
            await User.userValidate(req.body);
            // ! checked
            const user = await User.findOne({ $or: [{ email }, { mobile }] });
            if (user) {
                req.flash("formData", req.body)
                req.flash("error", "شما قبلا ثبت نام کرده اید")
                return res.redirect("/admin/register")
            }
            const newUser = await User.create({
                fullname, email, mobile, password, mobileActiveCode: nanoId()
            });
            // ! send sms
            console.log(`کد فعال سازی شما : ${newUser.mobileActiveCode}`);
            req.flash("success", "کد فعال سازی شما ارسال شد");
            return res.redirect("/admin/activeAccount");

        } catch (err) {
            console.log(err.message);
        }
    },
    // ? method ===> GET 
    // ? desc ===> activeAccount Page
    activeAccountPage: async (req, res) => {
        try {
            const formData = req.flash("formData")[0];
            return res.render("auth/activeAccount", {
                title: "ثبت نام",
                layout: "layout/authLayout.ejs",
                formData,
                message: req.flash("success"),
                error: req.flash("error"),
            })
        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> POST 
    // ? desc ===> activeAccount User 
    activeAccount: async (req, res) => {
        try {
            // ! get items
            const { mobile, code } = req.body;
            // ! find User
            const user = await User.findOne({ mobile })
            if (!user) {
                req.flash("formData", req.body)
                req.flash("error", "لطفا ابتدا ثبت نام کنید");
                return res.redirect("/admin/activeAccount")
            }
            // ! checked
            if (user.mobileActiveCode === parseInt(code)) {
                // ! active account user
                user.isMobileActive = true;
                // ! change mobile
                user.mobileActiveCode = nanoId();
                await user.save();
                // ! client
                req.flash("success", "اکانت شما با موفقیت فعال شد");
                return res.redirect("/admin/login");
            } else {
                req.flash("formData", req.body)
                req.flash("error", "لطفا ابتدا ثبت نام کنید");
                return res.redirect("/admin/activeAccount")
            }
        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> GET 
    // ? desc ===> login
    getLoginPage: async (req, res) => {
        try {
            return res.render("auth/login", {
                title: "ورود کاربر",
                layout: "layout/authLayout.ejs",
                message: req.flash("success"),
                error: req.flash("error"),
            })
        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> POST 
    // ? desc ===> login User
    LoginUser: async (req, res, next) => {
        try {
            // ! get items
            const { remember } = req.body;
            // ! set session
            if (remember == "on") {
                req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000 * 30;
            } else {
                req.session.cookie.expire = null;
            }
            // !user login
            req.flash("success", "ورود موفقیت آمیز بود")
            passport.authenticate("local", {
                successRedirect: "/admin",
                failureRedirect: "/admin/login",
                failureFlash: true
            })(req, res, next);

        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> GET 
    // ? desc ===> logOut User
    logoutUser: async (req, res) => {
        try {
            req.session = null;
            req.logout();
            res.redirect("/admin/login")
        } catch (err) {
            console.log(err);
        }
    },
    // ? method ===> GET 
    // ? desc ===> send Code User Page
    getSendCodePage: async (req, res) => {
        try {
            return res.render("auth/sendCode", {
                title: "ارسال کد فعال سازی",
                layout: "layout/authLayout.ejs",
                error: req.flash("error"),
            })
        } catch (err) {
            console.log(err);
        }
    },
    // ? method ===> POST 
    // ? desc ===> send Code To User 
    sendCode: async (req, res) => {
        try {
            const { mobile } = req.body;
            const user = await User.findOne({ mobile });
            if (!user) {
                req.flash("error", "لطفا ابتدا ثبت نام کنید");
                return res.redirect("/admin/sendCode");
            }
            // ! send sms
            console.log(user.mobileActiveCode);
            req.flash("success", "کد فعال سازی برای شما ارسال شد");
            res.redirect("/admin/activeAccount");
        } catch (err) {
            console.log(err);
        }
    },

}

module.exports = userController;