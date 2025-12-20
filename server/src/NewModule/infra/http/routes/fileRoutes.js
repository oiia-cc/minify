const router = require('express').Router();
const multer = require('multer');
const { uploadFileController } = require('../../../container/uploadContainer');
const { listFileController } = require('../../../container/listFileContainer');

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/', upload.single('file'), uploadFileController.uploadTmp);

router.get('/', listFileController.list);

module.exports = router;
