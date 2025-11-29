const prisma = require('../../database');

const updateStatus = (id, status) => {
    return prisma.fileVersion.update({
        where: { id },
        data: { status }
    })
}
const updateOne = (id, field) => {
    return prisma.fileVersion.update({
        where: { id },
        data: { ...field }
    })
}


const createOne = ({
    fileId,
    storagePath,
    tmpPath,
    filename,
    sizeBytes,
    mimeType,
    versionNumber,
    status,
    hash,
    notes
}) => {
    return prisma.fileVersion.create({
        data: {
            storagePath: storagePath,
            tmpPath: tmpPath,
            status: status,
            versionNumber: versionNumber,
            filename: filename,
            sizeBytes: sizeBytes,
            hash: hash,
            mimeType: mimeType,
            file: { connect: { id: fileId } },
            notes: notes
        }
    });
}

module.exports = {
    updateStatus,
    updateOne,
    createOne
}