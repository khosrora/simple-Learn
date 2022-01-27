const passport = require('passport');
const { Strategy } = require('passport-local');

const bcrypt = require('bcrypt');

const User = require('../src/model/user/User');

passport.use(
    new Strategy({ usernameField: "email" }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, {
                    message: "شما ثبت نام نکرده اید",
                });
            }
            if (user.isMobileActive === false) {
                return done(null, false, {
                    message: "لطفا اکانت خود را فعال کنید"
                });
            }
            if (user.isBloocked === true) {
                return done(null, false, {
                    message: "متاسفانه دسترسی شما قطع شده است"
                });
            }
            if (user.isAdmin === "User") {
                return done(null, false, {
                    message: "متاسفانه شما برای مدیریت تایید نشده اید"
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                return done(null, user); //req.user
            } else {
                return done(null, false, {
                    message: " پست الکترونیک یا کلمه عبور صحیح نمی باشد"
                });
            }
        } catch (err) {
            console.log(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});