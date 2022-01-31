const { Router } = require('express');
const router = new Router();


// ! controller
const channelControllerAPI = require('./channelControllerAPI');

// ? method ===> POST
// ? desc ===> request channel
router.post("/requestChannel", channelControllerAPI.requestChannel)



module.exports = router;