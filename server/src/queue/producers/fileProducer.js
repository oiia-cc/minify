const { fileQueue } = require('../queueConfig');

const { jobNames, eventName, messages } = require('../../constants');
const logger = require('../../utils/logger');
const fileVerisonService = require('../../services/version/versionService');
const { publishEvent } = require('../../events/eventPublisher');

const addFileJob = async ({ versionId, userId, tmpPath, fileId }) => {
    try {
        await fileVerisonService.updateStatus(versionId, jobNames.FILE_STATUS.PROCESSING);
        await publishEvent(eventName.FILE_UPDATE, {
            success: true,
            status: jobNames.FILE_STATUS.PROCESSING
        })

        await fileQueue.add(jobNames.FILE_PROCESS_JOB, {
            versionId,
            userId,
            tmpPath,
            fileId
        })
    } catch (err) {
        logger.error(messages.ENQUEUE_FAILED + err.message);
    }
}

module.exports = {
    addFileJob
}