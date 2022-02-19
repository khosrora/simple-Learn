const { Router } = require('express');
const router = new Router();


// ! controller
const publicControllerAPI = require('./publicControllerAPI');


// ? method ===> GET
// ? desc ===> public apis
/**
 * @swagger
 * /publicapi:
 *  get:
 *    description: public apis
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/publicApi", publicControllerAPI.getPublics)



module.exports = router;