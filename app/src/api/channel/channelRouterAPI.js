const { Router } = require('express');
const router = new Router();


// ! controller
const channelControllerAPI = require('./channelControllerAPI');

// ? method ===> POST
// ? desc ===> request channel
/**
 * @swagger
 * /requestChannel:
 *  post:
 *    description: request channel for create chanell 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/requestChannel", channelControllerAPI.requestChannel)



module.exports = router;