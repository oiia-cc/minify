const storageService = require('../../services/storage/storageService');
const fileService = require('../../services/file/fileService');
const versionService = require('../../services/version/versionService');
const { jobNames } = require('../../constants');

const updateFinal = async ({ versionId, tmpPath, fileId }) => {

    const versionUpdated = await versionService.updateOne(versionId, {
        status: jobNames.FILE_STATUS.COMPLETED,
        storagePath: tmpPath,
        tmpPath: "null"
    })
    const moved = await storageService.moveToFinal({ tmpPath });

    const updatedFile = await fileService.updateOne(fileId, {
        displayName: versionUpdated.filename
    });
    // console.log(">>>verrr:", versionUpdated);
    // console.log(">>>movedd:", moved);
    // console.log(">>>updated:", updatedFile);

    return jobNames.FILE_STATUS.COMPLETED;

}

module.exports = {
    updateFinal
}