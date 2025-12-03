const router = require('express').Router();
const multer = require('multer');
const fileController = require('../controllers/file');

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/', upload.single("file"), fileController.uploadTmp);
router.get('/', fileController.listFiles)

module.exports = router;