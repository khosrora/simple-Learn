const Course = require('../../model/course/Course');
const Channell = require('../../model/channell/Channell');

const { slug } = require('../../../utilities/helpers/slug');

const channelControllerAPI = {
    createCourse: async (req, res) => {
        try {
            // ! get items
            const { image, title, shortDesc, content, channell, url, category } = req.body;
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
                image, slug: slug(title), title, shortDesc, content, channell, url, category
            })
            // ! response to client
            return res.status(200).json({ message: "آموزش بعد از تایید مدیریت نمایش داده میشود" });
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    editCourse: async (req, res) => {
        try {
            // ! get items
            const { _id, image, title, url, shortDesc, content, category } = req.body;
            // ! validation
            await Course.courseValidate(req.body)
            // ! find and update
            await Course.findByIdAndUpdate(_id, {
                image, slug: slug(title), title, shortDesc, content, url, category, permission: false
            });
            // ! send response to client
            return res.status(200).json({ message: "لطفا منتظر تایید مدیریت باشید" })

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    deleteCourse: async (req, res) => {
        try {
            // ! get items
            const { courseId } = req.body;
            // ! find and delete
            await Course.findByIdAndDelete({ _id: courseId })
            // ! send response to client
            return res.status(200).json({ message: "آموزش با موفقیت حذف شد" })

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
    getCourse: async (req, res) => {
        try {
            // ! get slug
            const slug = req.params.slug;
            // ! find channell
            const course = await Course.findOne({ slug }).populate("image");
            const channell = await Channell.findOne({ _id: course.channell });
            if (!course) return res.status(400).json({ message: "آموزش مورد نظر پیدا نشد" });
            // ! edit channell
            course.view += 1;
            await course.save();
            // ! response to client
            return res.status(200).json({
                course,
                channell
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}



module.exports = channelControllerAPI;