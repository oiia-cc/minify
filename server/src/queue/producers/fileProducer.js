const { fileQueue } = require('../queueConfig');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');
const logger = require('../../utils/logger');

const addFileJob = async (versionId, userId, tmpPath) => {
    try {
        await fileQueue.add(FILE_PROCESS_JOB, {
            versionId,
            userId,
            tmpPath
        })
    } catch (err) {
        logger.error("Failed to enqueue file job: ", err.message);
    }
}

module.exports = {
    addFileJob
}