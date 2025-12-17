const storageService = require('../../../services/storage/storageService');
const fileService = require('../../../services/file/fileService');
const versionService = require('../../../services/version/versionService');
const { FileStatus, ProgressMap } = require('../../../constants');
const { handleSucceeded } = require('./helpers/handleSucceeded');

const updateFinal = async (context, container, step) => {
    const ctx = { ...context }

    const { version } = ctx.jobData;

    const { info } = container;
    info("fppppp, ", version);

    const { id: versionId, tmpPath, fileId } = version;

    try {
        const newVer = await container.versionService.updateOne(versionId, {
            status: FileStatus.COMPLETED,
            storagePath: tmpPath,
            tmpPath: "null"
        })
        const moved = await container.storageService.moveToFinal({ tmpPath });

        const newFile = await container.fileService.updateOne(fileId, {
            displayName: newVer.filename
        });
        // console.log(">>>verrr:", versionUpdated);
        // console.log(">>>movedd:", moved);
        // console.log(">>>updated:", updatedFile);

        const res = await handleSucceeded(newVer, container, step);

        return res;

    } catch (err) {
        info("errmm", err);
        return {
            success: false,
            step,
            versionId,
            fileId,
            status: "falied",
            progress: 99,
            message: "occurs exception in final step",
            error: err,
        }
    }
}

module.exports = {
    updateFinal
}