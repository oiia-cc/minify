const { fileQueue } = require('../queueConfig');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');
const logger = require('../../utils/logger');
const fileVerisonService = require('../../services/version/versionService');
const { publishEvent } = require('../../events/eventPublisher');

const addFileJob = async ({ versionId, userId, tmpPath, fileId }) => {
    try {
        await fileVerisonService.updateStatus(versionId, "processing");
        await publishEvent("fileUpdate", {
            success: true,
            status: "PROCESSING"
        })

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

module.exports = {
    addFileJob
}