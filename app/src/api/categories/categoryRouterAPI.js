const { Router } = require('express');
const router = new Router();


// ! controller
const userControllerAPI = require('./categoryControllerAPI');

// ? method ===> GET
// ? desc ===> get all categories 
/**
 * @swagger
 * /getAllCategories:
 *  get:
 *    description: get all categories 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getAllCategories", userControllerAPI.getAllCategories)


module.exports = router;