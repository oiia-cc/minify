const storage = require('../../loaders/storageLoader');
const db = require('../../loaders/dbLoader.js');
const prisma = require('../../prisma1.js');

const processFileJob = async ({ tempFileId, userId, path }) => {
    const { data, error } = await storage.storage.from("tmp").download(path);

    if (error) throw error;

    const resp =
        await storage.storage.from('final').upload(`/${userId}/${tempFileId}`, data);

    const { data: moved, error: moveErr } = resp;

    if (moveErr) throw moveErr;


    const res = await prisma.fileVersion.update({
        where: { id: tempFileId },
        data: { status: "completed" }
    });

    // await db`UPDATE file_versions SET status = 'completed' WHERE id = ${tempFileId}`;
    console.log(">>> DB updated", res);
}

module.exports = { processFileJob };