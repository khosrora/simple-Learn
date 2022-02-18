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


module.exports = router;