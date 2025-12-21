const fileService = require("../../services/file/fileService");
const {
  addFileJob,
  scanFileJob,
} = require("../../queue/producers/fileProducer");
const prisma = require("../../database");
const crypto = require("crypto");
const fileVerisonService = require("../../services/version/versionService");
const { publishEvent } = require("../../events/eventPublisher");
const fileUploadApp = require("../../services/fileUploadApp");
const { info } = require("../../utils/logger");

const uploadTmp = async (req, res, next) => {
  try {
    const file = req.file;
    const userId = req.user.id;
    info(">>>user", req.user);

    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // 2. Kiểm tra dung lượng (4MB = 4 * 1024 * 1024 bytes)
    // const maxSize = 4 * 1024 * 1024;
    // if (file.size > maxSize) {
    //   return res.status(413).json({
    //     success: false,
    //     message: "File oversize! Maximum limit is 4MB",
    //   });
    // }

    /* example user logined */

    // console.log(">>> file: ", file);
    // console.log("PRISMA VERSION:", require("@prisma/client").Prisma?.prismaVersion);

    const result = fileUploadApp.uploadTmp({ userId, file });

    return res.status(201).json({
      success: true,
      data: result,
      message: "File uploaded to [tmp] successfully!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadTmp,
};
