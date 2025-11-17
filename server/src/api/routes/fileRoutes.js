const router = require('express').Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/', upload.single("file"), fileController.uploadTmp);

module.exports = router;