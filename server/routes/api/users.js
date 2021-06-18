const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

module.exports = router;
