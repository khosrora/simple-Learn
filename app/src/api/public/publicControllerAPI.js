const Channell = require('../../model/channell/Channell');
const Course = require('../../model/course/Course');


const publicControllerAPI = {

    // ? method ===> GET
    // ? desc ===> public apis
    getPublics: async (req, res) => {
        try {
            // ! get items
            const channels = await Channell.find({ permission: true }).populate("image").sort({ view: -1 });
            const courses = await Course.find({ permission: true }).populate("image").sort({ view: -1 });
            return res.status(200).json({
                channels,
                courses
            })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },

}


module.exports = publicControllerAPI;