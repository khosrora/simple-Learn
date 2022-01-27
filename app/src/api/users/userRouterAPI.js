const { Router } = require('express');
const router = new Router();


// ! controller
const userControllerAPI = require('./userControllerAPI');

// ? method ===> POST
// ? desc ===> register User 
router.post("/register", userControllerAPI.register)

// ? method ===> POST
// ? desc ===> active phone number user
router.post("/sendActiveCode", userControllerAPI.activeCode)

// ? method ===> Login
// ? desc ===> Login User
router.post("/login", userControllerAPI.login)

// ? method ===> refresh token
// ? desc ===> Login refresh token
router.post("/refreshToken", userControllerAPI.refreshToken)

// ? method ===> change password
// ? desc ===> send code
router.post("/codeChangePassword", userControllerAPI.codeChangePassword)

// ? method ===> refresh token
// ? desc ===> change password user
router.post("/changePassword", userControllerAPI.changePassword)



module.exports = router;