const fileService = require('../../services/file/fileService');
const { addFileJob, scanFileJob } = require("../../queue/producers/fileProducer");
const prisma = require('../../database');
const crypto = require('crypto');
const fileVerisonService = require('../../services/version/fileVersionService');
const { publishEvent } = require('../../events/eventPublisher');

const createFileAndVersion = async (userId, uploaded, file) => {
    const fileRecord = await prisma.file.create({
        data: {
            ownerId: userId,
            displayName: uploaded.filename,
            isDeleted: false,
        }
    });

    const hash = crypto.createHash("sha256").update(file.buffer).digest("hex");

    // Tạo record tạm trong DB (ví dụ version với trạng thái “uploaded” hoặc “pending”)
    const versionRecord = await prisma.fileVersion.create({
        data: {
            storagePath: uploaded.path,
            tmpPath: uploaded.path,
            status: "uploaded",
            versionNumber: 1,
            filename: uploaded.filename,
            sizeBytes: uploaded.size,
            hash: hash,
            filename: file.originalname,
            mimeType: file.mimeType,
            file: { connect: { id: fileRecord.id } }
        }
    });
    // console.log(">>> ver: ", fileRecord);
    console.log(">>> ver: ", versionRecord);
    await publishEvent("fileUpdate", {
        success: true,
        status: "UPLOADED"
    })

    return {
        newFile: fileRecord,
        newVersion: versionRecord
    };
}

const uploadTmp = async (req, res, next) => {
    try {
        const file = req.file;
        const userId = req.user.id; /* example user logined */

        // console.log(">>> file: ", file);
        // console.log("PRISMA VERSION:", require("@prisma/client").Prisma?.prismaVersion);

        if (!file) {
            return res.status(400).json({ success: "failed", message: "No file provided" });
        }
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        /* upload file to tmp bucket*/
        const uploaded = await fileService.uploadToTmp(file, userId);

        const { newFile, newVersion } = await createFileAndVersion(userId, uploaded, file)

        await addFileJob(newVersion.id, userId, newVersion.tmpPath, newFile.id);

        return res.status(201).json({
            success: true,
            data: {
                fileId: newFile.id,
                versionId: newVersion.id,
                tmpPath: newVersion.tmpPath
            },
            message: "File uploaded to [tmp] successfully!"
        })

    } catch (err) {
        next(err);
    }
}

module.exports = {
    uploadTmp
}