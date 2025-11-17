const { FILE_STATUS } = require('../../constants/jobNames.js');
const fileService = require('../../services/file/fileService.js');
const { publishEvent } = require('../../services/eventService.js');
const fileVerisonService = require('../../services/fileVersionService.js');
const processFileJob = async ({ versionId, userId, tmpPath }) => {

    const result = await fileService.moveToFinal(tmpPath, userId, versionId);

    console.log(result);

    await fileVerisonService.updateStatus(versionId, FILE_STATUS.COMPLETED);

    await publishEvent("file-events",
        {
            userId,
            versionId: versionId,
            status: FILE_STATUS.COMPLETED
        }
    )
}

module.exports = { processFileJob };