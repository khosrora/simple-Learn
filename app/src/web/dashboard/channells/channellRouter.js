const { Router } = require('express');
const router = new Router();


// ! controller
const channellController = require('./channellController');


// ? Method ==> GET
// ? Desc ==>  get all channells
router.get("/allChannells", channellController.getAllChannells)

// ? Method ==> GET
// ? Desc ==>  set permission channells
router.get("/channellPermission/:id", channellController.setPermissionChannell)

// ? Method ==> GET
// ? Desc ==>  detail channell
router.get("/channell/:id", channellController.detailChannell)


module.exports = router;