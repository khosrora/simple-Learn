const { Router } = require('express');
const router = new Router();


// ! controller
const categoryController = require('./categoryController');


// ? Method ==> GET
// ? Desc ==>  get all categories
router.get("/allCategories", categoryController.getAllCategories)

// ? Method ==> GET
// ? Desc ==>  get createCategory page
router.get("/createCategory", categoryController.createCategoriesPage)

// ? Method ==> POST
// ? Desc ==>   createCategory 
router.post("/createCategory", categoryController.createCategory)

// ? Method ==> get
// ? Desc ==>   deleteCategroy 
router.get("/deleteCategroy/:id", categoryController.deleteCategroy)

// ? Method ==> get
// ? Desc ==>   edit Categroy Page 
router.get("/editCategory/:id", categoryController.editCategroyPage)

// ? Method ==> post
// ? Desc ==>   edit Categroy Page 
router.post("/editCategory/:id", categoryController.editCategroy)



module.exports = router;