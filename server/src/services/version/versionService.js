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
        data: { field }
    })
}

const createOne = (newData) => {
    return prisma.fileVersion.create(newData);
}

module.exports = {
    updateStatus,
    updateOne,
    createOne
}