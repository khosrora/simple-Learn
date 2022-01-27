const { Router } = require('express');
const router = new Router();


const userController = require('./userController');

// ? method ===> GET 
// ? desc ===> register page 
router.get("/register", userController.registerPage)

// ? method ===> POST 
// ? desc ===> register User 
router.post("/register", userController.registerUser)

// ? method ===> GET 
// ? desc ===> activeAccount Page 
router.get("/activeAccount", userController.activeAccountPage)

// ? method ===> POST 
// ? desc ===> activeAccount User
router.post("/activeAccount", userController.activeAccount)

// ? method ===> GET 
// ? desc ===> login
router.get("/login", userController.getLoginPage)

// ? method ===> POST 
// ? desc ===> login User
router.post("/login", userController.LoginUser)

// ? method ===> GET 
// ? desc ===> logOut User
router.get("/logout", userController.logoutUser)

// ? method ===> GET 
// ? desc ===> send Code User Page
router.get("/sendCode", userController.getSendCodePage)

// ? method ===> POST 
// ? desc ===> send Code To User 
router.post("/sendCode", userController.sendCode)




module.exports = router;