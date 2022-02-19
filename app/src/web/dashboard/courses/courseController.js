const Course = require('../../../model/course/Course');
const { jalaliMoment } = require('../../../../utilities/helpers/jalali');


const channellController = {

    // ? Method ==> GET
    // ? Desc ==>  get all courses
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.find().populate("channell");

            res.render("pages/courses/courses.ejs", {
                title: "پنل مدیریت || آموزش",
                bread: "آموزش",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                jalaliMoment,
                courses
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  get all courses
    setCoursePermission: async (req, res) => {
        try {
            // ! get params
            const id = req.params.id;
            // ! find channell
            const course = await Course.findById(id);
            if (!course) {
                req.flash("error", "دوره مورد نظر پیدا نشد")
                res.redirect("/admin/allCourses")
            }
            // ! set permission or not
            if (course.permission) {
                course.permission = false;
                await course.save();
                req.flash("error", "آموزش مورد نظر غیر فعال شد")
                res.redirect("/admin/allCourses")
            } else {
                course.permission = true;
                await course.save();
                req.flash("success", "آموزش مورد نظر  فعال شد")
                res.redirect("/admin/allCourses")
            }
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  get all courses
    getCourse: async (req, res) => {
        try {
            // ! get params
            const id = req.params.id;
            // ! find channell
            const course = await Course.findById(id).populate("channell");
            res.render("pages/courses/course.ejs", {
                title: "پنل مدیریت || آموزش",
                bread: "آموزش",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                jalaliMoment,
                course
            })
        } catch (err) {
            console.log(err.message);
        }
    },
}


module.exports = channellController;