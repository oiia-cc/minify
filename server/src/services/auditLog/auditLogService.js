const prisma = require('../../database');


const updateOne = (id, field) => {
    return prisma.auditLog.update({
        where: { id },
        data: { ...field }
    })
}


const createOne = ({
    actorUserId = null,
    actorType = 'system',
    action,
    targetType = null,
    targetId = null,
    details = {},

}) => {
    return prisma.auditLog.create({
        data: {
            actorUserId,
            actorType,
            action,
            targetType,
            targetId,
            details,
        }
    });
}

module.exports = {
    updateOne,
    createOne
}