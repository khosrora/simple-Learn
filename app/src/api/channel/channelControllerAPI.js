const User = require('../../model/user/User');
const Channel = require('../../model/channel/Channel');


const channelControllerAPI = {
    requestChannel: async (req, res) => {
        try {
            // ! get items 
            const { name, shortDesc, desc, linkAparat, userId } = req.body;
            // ! find user
            const userIsExist = await User.findOne({ _id: userId });
            if (!userIsExist) return res.status(400).json({ message: "متاسفانه کاربر مورد نظر پیدا نشد" });
            // ! validation
            if (!name || !shortDesc || !desc || !linkAparat || !userId) return res.status(400).json({ message: "لطفا تمام اطلاعات را وارد کنید" });
            // ! create Channell
            await Channel.create({
                name, shortDesc, desc, linkAparat, image: req.file.path , user: userId
            })
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