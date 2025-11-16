const router = require('express').Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');

console.log("routing");

const upload = multer({
    storage: multer.memoryStorage(),
})

router.get('/', fileController.hello);

router.post('/', upload.single("file"), fileController.uploadTmp);

module.exports = router;