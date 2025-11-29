const { fileQueue } = require('../queueConfig');

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

module.exports = {
    updateVersionJob
}