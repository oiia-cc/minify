const router = require("express").Router();
const multer = require("multer");
const fileController = require("../controllers/fileController");
const { info } = require("../../utils/logger");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 }, // Giới hạn 4MB ở đây
});

// const upload = multer({
//   dest: "uploads/tmp/",
// });
router.post("/", upload.single("file"), fileController.uploadTmp);

module.exports = router;
