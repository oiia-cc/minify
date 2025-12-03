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


const listOfUser = ({
    userId,
    search,
    groupBy,
    sortBy = "updatedAt",
    orderBy = "desc",
    skip = 0,
    limit = 20,
}) => {

    // ----- SEARCH -----
    const searchCondition = search
        ? {
            displayName: {
                contains: search,
                mode: "insensitive"
            }
        }
        : {};

    // ----- GROUP (FILTER) -----
    let groupCondition = {};

    if (groupBy === "image") {
        groupCondition = { mimeType: { startsWith: "image/" } };
    }
    if (groupBy === "video") {
        groupCondition = { mimeType: { startsWith: "video/" } };
    }
    if (groupBy === "doc") {
        groupCondition = {
            OR: [
                { mimeType: { contains: "pdf" } },
                { mimeType: { contains: "msword" } },
                { mimeType: { contains: "officedocument" } }
            ]
        };
    }
    if (groupBy === "zip") {
        groupCondition = {
            mimeType: {
                contains: "zip"
            }
        };
    }

    // ----- WHERE -----
    const where = {
        ownerId: userId,
        isDeleted: false,
        ...searchCondition,
        ...groupCondition
    };

    return prisma.file.findMany({
        where,
        orderBy: {
            [sortBy]: orderBy
        },
        skip: Number(skip),
        take: Number(limit),
        include: {
            versions: {
                orderBy: { versionNumber: "desc" },
                take: 1
            }
        }
    });
};



module.exports = {
    createOne
    , updateOne,
    listOfUser
};