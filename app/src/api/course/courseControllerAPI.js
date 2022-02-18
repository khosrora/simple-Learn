const Course = require('../../model/course/Course');
const Channell = require('../../model/channel/Channel');


const channelControllerAPI = {
    createCourse: async (req, res) => {
        try {
            // ! get items
            const { image, title, shortDesc, content, user } = req.body;
            // ! validation
            if (!image || !title || !shortDesc || !content || !user) return res.status(400).json({ message: "لطفا تمام اطلاعات را وارد کنید" });
            // ! find channell
            const chann = await Channell.findOne({ user });
            if (chann.permission === false) return res.status(400).json({ message: "در حال حاضر کانال شما تایید نشده است" });
            // ! find course
            const course = await Course.findOne({ title });
            if (course) return res.status(400).json({ message: "دوره ای با این عنوان قبلا ثبت شده است" });
            // ! create course 
            await Course.create({
                image, title, shortDesc, content, user
            })
            // ! response to client
            return res.status(200).json({ message: "آموزش بعد از تایید مدیریت نمایش داده میشود" });
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },

}



module.exports = channelControllerAPI;