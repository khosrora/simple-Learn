const { Router } = require('express');
const router = new Router();

const { upload } = require('../../../utilities/middlewares/multerSingle');

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
router.post("/requestChannel", upload.single("file"), channelControllerAPI.requestChannel)



module.exports = router;