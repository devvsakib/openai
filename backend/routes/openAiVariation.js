const express = require('express')
const generateVariation = require('../controllers/imageVariation')
const router = express.Router()


router.post('/genvariation', generateVariation)

module.exports = router