const { fileQueue } = require('../queueConfig');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');
const logger = require('../../utils/logger');
const fileVerisonService = require('../../services/version/fileVersionService');
const { publishEvent } = require('../../events/eventPublisher');

const addFileJob = async (versionId, userId, tmpPath, fileId) => {
    await fileVerisonService.updateStatus(versionId, "processing");
    await publishEvent("fileUpdate", {
        success: true,
        status: "PROCESSING"
    })

    try {
        await fileQueue.add("PROCESS_FILE", {
            versionId,
            userId,
            tmpPath,
            fileId
        })
    } catch (err) {
        logger.error("Failed to enqueue file job: ", err.message);
    }
}

const updateVersionJob = async (versionId, userId, tmpPath, fileId) => {
    try {
        await fileQueue.add("UPDATE_VERSION", {
            versionId,
            userId,
            tmpPath,
            fileId
        })
    } catch (err) {
        logger.error("Failed to enqueue file job: ", err.message);
    }
}


const scanFileJob = async (versionId, userId, tmpPath) => {
    try {
        await fileQueue.add("scanning", {
            versionId,
            userId,
            tmpPath
        })
    } catch (err) {
        logger.error("Failed to enqueue file job: ", err.message);
    }
}

module.exports = {
    addFileJob,
    scanFileJob
}