const { FILE_STATUS } = require('../../constants/jobNames.js');
const fileService = require('../../services/file/fileService.js');
const { publishEvent } = require('../../events/eventPublisher.js');
const fileVerisonService = require('../../services/version/fileVersionService.js');
const processFileJob = async ({ versionId, userId, tmpPath }) => {

    const result = await fileService.moveToFinal(tmpPath, userId, versionId);

    await fileVerisonService.updateStatus(versionId, FILE_STATUS.COMPLETED);

    await publishEvent("fileUpdate",
        {
            userId,
            versionId: versionId,
            status: FILE_STATUS.COMPLETED
        }
    )
}

module.exports = { processFileJob };