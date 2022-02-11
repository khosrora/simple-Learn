const User = require('../../model/user/User');
const Channel = require('../../model/channel/Channel');


const channelControllerAPI = {
    requestChannel: async (req, res) => {
        try {
            // ! get items 
            const { name, shortDesc, desc, linkAparat, userId } = req.body;
            // ! find user
            const user = await User.findOne({ _id: userId });
            if (!user) return res.status(400).json({ message: "متاسفانه کاربر مورد نظر پیدا نشد" });
            // ! checked request
            if (user.isSendChannell) return res.status(400).json({ message: "درخواست شما ارسال شده . لطفا منتظر بمانید" });
            // ! validation
            if (!name || !shortDesc || !desc || !linkAparat || !userId) return res.status(400).json({ message: "لطفا تمام اطلاعات را وارد کنید" });
            const channel = await Channel.findOne({
                $or: [
                    { name }, { linkAparat }
                ]
            })
            if (channel) return res.status(400).json({ message: "کانالی با این نام ثبت شده است" });
            // ! create Channell
            await Channel.create({
                name, shortDesc, desc, linkAparat, image: req.file.path, user: userId
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
    }
}



module.exports = channelControllerAPI;