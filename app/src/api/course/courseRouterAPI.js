const { Router } = require('express');
const router = new Router();

// ! controller
const channelControllerAPI = require('./courseControllerAPI');

// ? method ===> POST
// ? desc ===> create course
/**
 * @swagger
 * /requestChannel:
 *  post:
 *    description: create course 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/createCourse", channelControllerAPI.createCourse)

// ? method ===> POST
// ? desc ===> edit course
/**
 * @swagger
 * /editcourse:
 *  post:
 *    description: edit course 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/editCourse", channelControllerAPI.editCourse)

// ? method ===> POST
// ? desc ===> delete course
/**
 * @swagger
 * /deletecourse:
 *  post:
 *    description: delete course 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/deleteCourse", channelControllerAPI.deleteCourse)

// ? method ===> GET
// ? desc ===> get course
/**
 * @swagger
 * /get course:
 *  post:
 *    description: get course
 *    responses:
 *      '200':
 *        description: A successful response
 */
 router.get("/course/:slug", channelControllerAPI.getCourse)

module.exports = router;