const express = require('express')
const router = express.Router()
const chatsCtrl = require('../../controllers/api/chats')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Chat Routes
// POST /api/chats
router.post('/', ensureLoggedIn, chatsCtrl.create)
router.get('/', ensureLoggedIn, chatsCtrl.index)

// Group Chat Routes
router.put('/group/add', ensureLoggedIn, chatsCtrl.group.addToGroup)
router.put('/group/remove', ensureLoggedIn, chatsCtrl.group.removeFromGroup)
router.post('/group', ensureLoggedIn, chatsCtrl.group.create)
router.put('/group', ensureLoggedIn, chatsCtrl.group.edit)

module.exports = router