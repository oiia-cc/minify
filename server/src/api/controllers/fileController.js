const fileService = require('../../services/file/fileService');
const { addFileJob, scanFileJob } = require("../../queue/producers/fileProducer");
const prisma = require('../../database');
const crypto = require('crypto');
const fileVerisonService = require('../../services/version/versionService');
const { publishEvent } = require('../../events/eventPublisher');
const fileUploadApp = require('../../services/fileUploadApp');
const { info } = require('../../utils/logger');


const uploadTmp = async (req, res, next) => {
    try {
        const file = req.file;
        const userId = req.user.id;
        info(">>>file:", file)
        info(">>>user", req.user);
        /* example user logined */

        // console.log(">>> file: ", file);
        // console.log("PRISMA VERSION:", require("@prisma/client").Prisma?.prismaVersion);

        const result = fileUploadApp.uploadTmp({ userId, file });

        return res.status(201).json({
            success: true,
            data: result,
            message: "File uploaded to [tmp] successfully!"
        })

    } catch (err) {
        next(err);
    }
}

module.exports = {
    uploadTmp
}