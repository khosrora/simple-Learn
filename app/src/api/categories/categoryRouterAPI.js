const { Router } = require('express');
const router = new Router();


// ! controller
const userControllerAPI = require('./categoryControllerAPI');

// ? method ===> GET
// ? desc ===> get all categories 
router.get("/getAllCategories", userControllerAPI.getAllCategories)


module.exports = router;