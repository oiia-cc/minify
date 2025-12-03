const prisma = require('../../database');

const updateStatus = (id, status) => {
    return prisma.job.update({
        where: { id },
        data: { status }
    })
}
const updateOne = (jobUuid, field) => {
    return prisma.job.update({
        where: { jobUuid: jobUuid },
        data: { ...field }
    })
}


const createOne = ({
    fileVersionId,
    jobType,
    payload,
    attempts,
    maxAttempts,
    status,
}) => {
    return prisma.job.create({
        data: {
            fileVersionId,
            jobType,
            payload,
            attempts,
            maxAttempts,
            status
        }
    });
}

module.exports = {
    updateStatus,
    updateOne,
    createOne
}