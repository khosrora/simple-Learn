const { Router } = require('express');
const router = new Router();

const { uploadMultiple } = require('../../../utilities/middlewares/multerGallery');

// ! controller
const channelControllerAPI = require('./galleryControllerAPI');

// ? method ===> POST
// ? desc ===> request channel
/**
 * @swagger
 * /galleryCreate:
 *  post:
 *    description: create gallery cannall 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/galleryCreate", uploadMultiple, channelControllerAPI.galleryCreate)

// ? method ===> POST
// ? desc ===> All images
/**
 * @swagger
 * /getAllImages:
 *  post:
 *    description: All images
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/getAllImages", channelControllerAPI.getAllImages)

// ? method ===> POST
// ? desc ===> delete image
/**
 * @swagger
 * /getAllImages:
 *  post:
 *    description: delete image
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/deleteImage", channelControllerAPI.deleteImage)





module.exports = router;