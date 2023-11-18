const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST/GET /api/users
router.route('/').post(usersCtrl.create).get(ensureLoggedIn, usersCtrl.index);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router