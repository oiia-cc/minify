
const storageService = require('../services/storage/storageService');
const { publishEvent } = require('../events/eventPublisher');
const crypto = require('crypto');
const { addFileJob } = require('../queue/producers/fileProducer');
const fileVersionService = require('../services/version/versionService');
const fileService = require('./file/fileService');
const { info } = require('../utils/logger');

const uploadTmp = async ({ userId, file }) => {
    info(">>>userId:", userId);

    if (!file) {
        return res.status(400).json({ success: "failed", message: "No file provided" });
    }
    if (!userId) {
        console.log(">>>choose a");
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    console.log(">>>choose b");


    // console.log(">", uploaded.filename);
    // console.log(">>>f:", file);

    const newFile = await fileService.createOne({
        ownerId: userId,
        displayName: file.originalname,
        isDeleted: false
    })
    info(">>>newfile:", newFile)

    const hash = crypto.createHash("sha256").update(file.buffer).digest("hex");

    const newVersion = await fileVersionService.createOne({
        storagePath: "init",
        tmpPath: "init",
        status: "uploaded",
        versionNumber: 1,
        sizeBytes: file.size,
        hash: hash,
        filename: file.originalname,
        mimeType: file.mimetype,
        fileId: newFile.id
    });

    const tmpPath = `${newFile.ownerId}/${newFile.id}/${newVersion.id}/${newVersion.filename}`;

    /* upload file to tmp bucket*/
    await storageService.uploadToTmp({
        tmpPath,
        buffer: file.buffer,
        mimeType: file.mimeType
    });

    await fileVersionService.updateOne(newVersion.id, {
        status: "queued",
        tmpPath: tmpPath,
    });


    await publishEvent("fileUpdate", {
        status: "QUEUED",
        success: true
    });

    await addFileJob({
        versionId: newVersion.id,
        userId,
        tmpPath,
        fileId: newFile.id
    });

    return {
        fileId: newFile.id,
        versionId: newVersion.id,
        tmpPath: tmpPath
    }
}

module.exports = {
    uploadTmp
}
