const express = require("express");
const router = express.Router();
const controller = require('../controller/SignIn.controller');

router.route('/').post(controller.login);

module.exports = router;    