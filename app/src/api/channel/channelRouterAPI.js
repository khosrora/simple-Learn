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
router.post("/requestChannel", channelControllerAPI.requestChannel)


// ? method ===> POST
// ? desc ===> ghange Image Channell
/**
 * @swagger
 * /ghangeImageChannell:
 *  post:
 *    description: ghange Image Channell
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/ghangeImageChannell", channelControllerAPI.ghangeImage)


module.exports = router;