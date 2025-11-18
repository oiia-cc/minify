const prisma = require('../../database');

const updateStatus = (id, status) => {
    return prisma.fileVersion.update({
        where: { id },
        data: { status }
    })
}

module.exports = {
    updateStatus
}