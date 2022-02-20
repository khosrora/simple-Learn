const Course = require('../../model/course/Course');
const Channell = require('../../model/channell/Channell');

const { slug } = require('../../../utilities/helpers/slug');

const channelControllerAPI = {
    createCourse: async (req, res) => {
        try {
            // ! get items
            const { image, title, shortDesc, content, channell, url } = req.body;
            // ! validation
            await Course.courseValidate(req.body)
            // ! find channell
            const chann = await Channell.findOne({ channell });
            if (chann.permission === false) return res.status(400).json({ message: "در حال حاضر کانال شما تایید نشده است" });
            // ! find course
            const course = await Course.findOne({ title });
            if (course) return res.status(400).json({ message: "دوره ای با این عنوان قبلا ثبت شده است" });
            // ! create course 
            await Course.create({
                image, slug: slug(title), title, shortDesc, content, channell, url
            })
            // ! response to client
            return res.status(200).json({ message: "آموزش بعد از تایید مدیریت نمایش داده میشود" });
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },

}



module.exports = channelControllerAPI;