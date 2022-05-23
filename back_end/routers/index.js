const express = require('express');
const router = express.Router();

router.use('/user/login', require('./SignIn.router'));

module.exports = router;