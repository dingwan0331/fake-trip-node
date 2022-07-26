const express = require('express');
const router  = express.Router();

const users = require('../controller/users')

router.get('/signup', users.signUp)

module.exports = router