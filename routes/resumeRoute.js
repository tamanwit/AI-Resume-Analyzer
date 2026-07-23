const express = require('express')
const router = express.Router()

const resumeController = require('../controllers/resumeController')
const upload = require('../middleware/multer')

router.post('/upload', upload.single('resume'), resumeController.uploadResume)

module.exports = router
