const { Router } = require('express');
const router = new Router();


// ! controller
const userControllerAPI = require('./userControllerAPI');

// ? method ===> POST
// ? desc ===> register User 
/**
 * @swagger
 * /register:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/register", userControllerAPI.register)

// ? method ===> POST
// ? desc ===> active phone number user
/**
 * @swagger
 * /sendActiveCode:
 *  post:
 *    description: active phone number user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/sendActiveCode", userControllerAPI.activeCode)

// ? method ===> Login
// ? desc ===> Login User
/**
 * @swagger
 * /login:
 *  post:
 *    description: Login User
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/login", userControllerAPI.login)

// ? method ===> refresh token
// ? desc ===> Login refresh token
/**
 * @swagger
 * /refreshToken:
 *  post:
 *    description:  Login refresh token
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/refreshToken", userControllerAPI.refreshToken)

// ? method ===> change password
// ? desc ===> send code
/**
 * @swagger
 * /codeChangePassword:
 *  post:
 *    description: send code for chage password
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/codeChangePassword", userControllerAPI.codeChangePassword)

// ? method ===> refresh token
// ? desc ===> change password user
/**
 * @swagger
 * /codeChangePassword:
 *  post:
 *    description: change password user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/changePassword", userControllerAPI.changePassword)



module.exports = router;