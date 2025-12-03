const prisma = require('../../database');

const updateStatus = (id, status) => {
    return prisma.notification.update({
        where: { id },
        data: { status }
    })
}
const updateOne = (id, field) => {
    return prisma.notification.update({
        where: { id },
        data: { ...field }
    })
}

const createOne = ({
    userId,
    type = "type",
    payload = {},
    isRead = false,
}) => {
    return prisma.notification.create({
        data: {
            userId,
            type,
            payload,
            isRead
        }
    });
}

module.exports = {
    updateStatus,
    updateOne,
    createOne
}