const { fileQueue } = require('../queueConfig');

const addFileJob = async (tempFileId, userId, path) => {

    await fileQueue.add('processFile', { tempFileId, userId, path }, {
        attempts: 1
    },
    )
}

module.exports = {
    addFileJob
}