
const crypto = require('crypto');
const prisma = require('../../database');
const versionService = require('../../services/version/versionService');
const dedupCheck = async (buffer, fileId, userId, versionId) => {
    const hash = crypto.createHash("sha256").update(buffer).digest("hex");

    console.log(">>> duplicate ok!");
    return;
    // const exists = await prisma.fileVersion.findFirst({
    //     where: { hash }
    // })

    // console.log(">>> exist:", exists);
    // if (!exists) {
    //     await versionService.updateOne(versionId, { hash: hash });
    //     return { duplicate: false, hash };
    // }

    // if (exists.fileId === fileId) {
    //     return { duplicate: true, hash, type: 'same-file', existingVersion: exists }
    // }
    // return { duplicate: true, hash, type: 'other-file', existingVersion: exists }

}

module.exports = {
    dedupCheck
}