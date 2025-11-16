const fileService = require('../../services/fileService');
const { addFileJob } = require("../../queue/producers/fileProducer");
// const db = require('../../loaders/dbLoader');
const prisma = require('../../prisma1');

const hello = (req, res) => {
    res.json({ message: 'hello-word' })
}

const uploadTmp = async (req, res, next) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ success: "failed", message: "No file provided" });
        }

        const userId = '123'; /* example user logined */

        /* upload file to tmp bucket*/
        const data = await fileService.uploadToTmp(file, userId);

        const f = await prisma.file.findFirst({
            where: {
                id: data.id
            }
        });

        let version = null;
        if (!f) {
            const res1 = await prisma.file.create({
                data: {
                    owner_id: userId,
                    id: data.id,
                    display_name: "aaaa"
                }
            });
            console.log(">>>>", res1);
            // Tạo record tạm trong DB (ví dụ version với trạng thái “uploaded” hoặc “pending”)
            version = await prisma.fileVersion.create({
                data: {
                    file_id: data.id,
                    storage_path: data.path,
                    status: "uploaded",
                    size_bytes: file.size,
                    hash: "123",
                    filename: file.originalname,
                }
            });

            console.log(">>>>", version);
        }

        await addFileJob(version.id, userId, data.path);

        return res.json({
            success: true,
            data,
            message: "File upload tmp!"
        })

    } catch (err) {
        next(err);
    }
}

module.exports = {
    hello,
    uploadTmp
}