const storageService = require('../../../services/storage/storageService');
const fileService = require('../../../services/file/fileService');
const versionService = require('../../../services/version/versionService');
const { FileStatus, ProgressMap } = require('../../../constants');
const { handleSucceeded } = require('./helpers/handleSucceeded');

const updateFinal = async (context) => {
    const ctx = { ...context }

    const { step, info } = ctx;
    const { file, version } = ctx.job.data;

    info("fppppp, ", version);

    try {
        const { id: versionId, tmpPath, fileId } = version;
        ctx.version = await ctx.versionService.updateOne(versionId, {
            status: FileStatus.COMPLETED,
            storagePath: tmpPath,
            tmpPath: "null"
        })
        const moved = await storageService.moveToFinal({ tmpPath });

        ctx.file = await ctx.fileService.updateOne(fileId, {
            displayName: ctx.version.filename
        });
        // console.log(">>>verrr:", versionUpdated);
        // console.log(">>>movedd:", moved);
        // console.log(">>>updated:", updatedFile);

        const res = await handleSucceeded(ctx);

        return res;
    } catch (err) {
        info("errmm", err);
        return {
            success: false,
            step,
            error: err,
        }
    }
}

module.exports = {
    updateFinal
}