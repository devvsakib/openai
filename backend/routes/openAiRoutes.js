const express = require('express')
const { generateImg } = require('../controllers/controller')
const router = express.Router()


router.post('/genimg', generateImg)

module.exports = router