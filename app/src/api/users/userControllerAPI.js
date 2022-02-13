const nanoId = require('../../../utilities/helpers/nanoId');
const User = require('../../model/user/User');
const Channel = require('../../model/channel/Channel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userControllerAPI = {

    // ? method ===> GET
    // ? desc ===> send Code User Page
    register: async (req, res) => {
        try {
            // ! get items
            const { fullname, email, mobile, password } = req.body;
            // ! find user
            const user = await User.findOne({
                $or: [
                    { email }, { mobile }
                ]
            });
            if (user) return res.status(400).json({ message: "شما در وب سایت ثبت نام کرده اید" })
            // ! crete user in data base
            const newuser = await User.create({
                fullname, email, mobile, password, mobileActiveCode: nanoId()
            })
            // ! send message to clint
            console.log(newuser.mobileActiveCode);
            res.status(200).json({
                message: "ثبت نام شما با موفقیت پایان یافت"
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    // ? method ===> POST
    // ? desc ===> active phone number user
    activeCode: async (req, res) => {
        try {
            // ! get items
            const { mobile, code } = req.body;
            // ! find User
            const user = await User.findOne({ mobile })
            if (!user) {
                return res.status(400).json({ message: "لطفا ابتدا ثبت نام کنید" })
            }
            // ! checked
            if (user.mobileActiveCode === parseInt(code)) {
                // ! active account user
                user.isMobileActive = true;
                // ! change mobile
                user.mobileActiveCode = nanoId();
                await user.save();
                // ! client
                return res.status(200).json({ message: "شماره همراه شما تایید شد" })
            } else {
                return res.status(400).json({ message: "لطفا با دقت کد را وارد کنید" })
            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    // ? method ===> Login
    // ? desc ===> Login User
    login: async (req, res) => {
        try {
            // ! get body
            const { email, password } = req.body;
            // ! find user
            const user = await User.findOne({ email });
            // ! checked 
            if (!user) return res.status(400).json({ message: 'لطفا ابتدا ثبت نام کنید' });
            if (!user.isMobileActive) return res.status(400).json({ message: 'لطفا شماره تماس خود را فعال کنید' });
            const isMatchPassword = await bcrypt.compareSync(password, user.password);
            if (!isMatchPassword) return res.status(400).json({ message: 'لطفا ابتدا ثبت نام کنید' });
            const access_token = createAccessToken({ _id: user._id });
            // ! channell user
            let channell;
            if (user.isSendChannell) {
                channell = await findChannell(user);
            } else {
                channell = null;
            }
            // ! response
            return res.status(200).json({
                message: "ورود موفقیت آمیز بود",
                access_token,
                user: {
                    ...user._doc,
                    password: "",
                },
                channell
            })

        } catch (err) {
            console.log(err.message)
        }
    },
    // ? method ===> refresh token
    // ? desc ===> Login refresh token
    refreshToken: async (req, res) => {
        try {
            const { refresh_token } = req.body;
            if (!refresh_token) return res.status(400).json({ msg: "لطفا ابتدا وارد شوید" });
            jwt.verify(refresh_token, process.env.JWT_TOKEN, async (err, result) => {
                if (err) return res.status(400).json({ msg: "لطفا ابتدا وارد شوید" });

                const user = await User.findById({ _id: result._id }).select("-password");
                if (!user) return res.status(400).json({ msg: "این کاربر پیدا نشد" });
                const access_token = createAccessToken({ id: result.id });
                // ! channell user
                let channell;
                if (user.isSendChannell) {
                    channell = await findChannell(user);
                } else {
                    channell = null;
                }
                // ! send to Client
                res.json({
                    msg: "ورود شما موفقیت آمیز بود",
                    access_token,
                    user,
                    channell
                })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    // ? method ===> refresh token
    // ? desc ===> change password user
    codeChangePassword: async (req, res) => {
        try {
            // ! get items
            const { mobile } = req.body;
            console.log(mobile);
            // ! find user
            const user = await User.findOne({ mobile });
            if (!user) return res.status(400).json({ message: "لطفا ابتدا ثبت نام کنید" });

            // ! send sms
            console.log(user.mobileActiveCode);
            return res.status(200).json({ message: "کد برای شما ارسال شد" });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    changePassword: async (req, res) => {
        try {
            // ! get items
            const { mobile, newPassword, code } = req.body;
            // ! find user
            const user = await User.findOne({ mobile });
            if (!user) return res.status(400).json({ message: "لطفا ابتدا ثبت نام کنید" });

            if (code == user.mobileActiveCode) {
                user.password = newPassword;
                user.mobileActiveCode = nanoId();
                await user.save();
            } else {
                return res.status(200).json({ message: "در وارد کردن کد دقت کنید" });
            }

            // ! send sms
            return res.status(200).json({ message: "کلمه عبور شما با موفقیت تغییر کرد" });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "30d" })
}

const findChannell = async user => {
    const channell = await Channel.findOne({
        $and: [
            { user: user._id },
            { permission: true }
        ]
    }).select("name shortDesc desc linkAparat image view -_id");
    return channell;
}


module.exports = userControllerAPI;