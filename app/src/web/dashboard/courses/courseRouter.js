const { Router } = require('express');
const router = new Router();


// ! controller
const courseController = require('./courseController');

// ? Method ==> GET
// ? Desc ==>  get all courses
router.get("/allCourses", courseController.getAllCourses)

// ? Method ==> GET
// ? Desc ==>  get all courses
router.get("/coursePermission/:id", courseController.setCoursePermission)

// ? Method ==> GET
// ? Desc ==>  get course
router.get("/course/:id", courseController.getCourse)


module.exports = router;