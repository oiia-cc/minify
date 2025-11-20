const fileService = require('../../services/file/fileService');
const { addFileJob } = require("../../queue/producers/fileProducer");
const prisma = require('../../database');

const createFileAndVersion = async ({ userId, uploaded, file }) => {
    return await prisma.$transaction(async (tx) => {
        const fileRecord = await prisma.file.create({
            data: {
                ownerId: userId,
                displayName: uploaded.filename,
                isDeleted: false,
            }
        });

        // Tạo record tạm trong DB (ví dụ version với trạng thái “uploaded” hoặc “pending”)
        const versionRecord = await prisma.fileVersion.create({
            data: {
                fileId: fileRecord.id,
                storagePath: uploaded.path,
                tmpPath: uploaded.path,
                status: "uploaded",
                versionNumber: 1,
                filename: uploaded.filename,
                sizeBytes: uploaded.size,
                hash: "123",
                filename: file.originalname,
            }
        });
        return { file: fileRecord, version: versionRecord };
    })
}

const uploadTmp = async (req, res, next) => {
    try {
        const file = req.file;
        const userId = req.user.id; /* example user logined */

        if (!file) {
            return res.status(400).json({ success: "failed", message: "No file provided" });
        }


        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        /* upload file to tmp bucket*/
        const uploaded = await fileService.uploadToTmp(file, userId);


        const result = await createFileAndVersion({ userId, uploaded, file })

        await addFileJob(result.version.id, userId, uploaded.path);

        return res.status(201).json({
            success: true,
            data: {
                fileId: result.file.id,
                versionId: result.version.id,
                tmpPath: uploaded.path
            },
            message: "File uploaded to tmp successfully!"
        })

    } catch (err) {
        next(err);
    }
}

module.exports = {
    uploadTmp
}