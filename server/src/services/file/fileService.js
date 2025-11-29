const prisma = require('../../database');

const createOne = ({ ownerId, displayName, isDeleted }) => {
    return prisma.file.create({
        data: {
            displayName: displayName,
            isDeleted: isDeleted,
            owner: { connect: { id: ownerId } },
        }
    });
}

const updateOne = (id, field) => {
    return prisma.file.update({
        where: { id },
        data: { ...field }
    })
}


module.exports = {
    createOne
    , updateOne
};