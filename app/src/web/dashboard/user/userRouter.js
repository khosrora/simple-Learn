const { Router } = require('express');
const router = new Router();


// ! controller
const userController = require('./userController');


// ? Method ==> GET
// ? Desc ==>  get all users
router.get("/allUsers", userController.getAllUsers)

// ? Method ==> GET
// ? Desc ==>  change is bloock
router.get("/isBloock/:id", userController.isBloock)

// ? Method ==> GET
// ? Desc ==>  change is Admin
router.get("/isAdmin/:id", userController.isAdmin)



module.exports = router;