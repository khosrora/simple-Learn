const { Router } = require('express');
const router = new Router();


// ! controller
const dashboardController = require('./dashboardController');


// ? Method ==> GET
// ? Desc ==>  admin panel page
router.get("/", dashboardController.getHomePage)


module.exports = router;