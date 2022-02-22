const User = require('../../model/user/User');
const Channell = require('../../model/channell/Channell');
const { slug } = require('../../../utilities/helpers/slug');

const channelControllerAPI = {
    requestChannel: async (req, res) => {
        try {
            // ! get items 
            const { name, shortDesc, desc, linkAparat, userId } = req.body;
            // ! validation
            await Channell.channellValidate(req.body)
            // ! find user
            const user = await User.findOne({ _id: userId });
            if (!user) return res.status(400).json({ message: "متاسفانه کاربر مورد نظر پیدا نشد" });
            // ! checked request
            if (user.isSendChannell) return res.status(400).json({ message: "درخواست شما ارسال شده . لطفا منتظر بمانید" });
            // ! validation
            if (!name || !shortDesc || !desc || !linkAparat || !userId) return res.status(400).json({ message: "لطفا تمام اطلاعات را وارد کنید" });
            const channell = await Channell.findOne({
                $or: [
                    { name }, { linkAparat }
                ]
            })
            if (channell) return res.status(400).json({ message: "کانالی با این نام ثبت شده است" });
            // ! create Channell
            await Channell.create({
                name, slug: slug(name), shortDesc, desc, linkAparat, image: `/uploads/images/channell/default.png`, user: userId
            })
            user.isSendChannell = true;
            await user.save();
            // ! response to client
            return res.status(200).json({
                message: "کانال شما بعد از تایید فعال خواهد شد",
            });
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    changeImage: async (req, res) => {
        try {
            // ! get items 
            const { link, user } = req.body;
            // ! find channell
            const channell = await Channell.findOne({ user });
            if (!channell) return res.status(400).json({ message: "لطفا ابتدا درخواست کانال خود را ارسال کنید" });
            // ! change image
            channell.image = link;
            await channell.save();
            // ! response to client
            return res.status(200).json({ message: "عکس کانال تغییر کرد" })

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    editChannell: async (req, res) => {
        try {
            // ! get items 
            const { name, shortDesc, desc, linkAparat, id } = req.body;
            // ! update
            const chann = await Channell.findByIdAndUpdate({ _id: id }, {
                name, shortDesc, desc, linkAparat, slug: slug(name)
            })
            if (!chann) return res.status(400).json({ message: "کانال مورد نظر پیدا نشد" })
            chann.permission = false;
            await chann.save();
            // ! send response to client
            return res.status(200).json({
                message: "کانال شما با موفقیت ویرایش شد.منتظر تایید مدیریت باشید",
                channel: chann
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    getChannell: async (req, res) => {
        try {
            // ! get slug
            const slug = req.params.slug;
            // ! find channell
            const channell = await Channell.findOne({ slug });
            const admin = await User.findOne({ _id: channell.user });
            if (!channell) return res.status(400).json({ message: "کانال مورد نظر پیدا نشد" });
            // ! edit channell
            channell.view += 1;
            await channell.save();
            // ! response to client
            return res.status(200).json({
                channell,
                admin
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
}



module.exports = channelControllerAPI;