const { info, errorLog } = require("../../../utils/logger");
const { handleError } = require("./helpers/handleError");
const { handleScan } = require("./helpers/handleScan");
const { handleInfected } = require("./helpers/handleInfected");

// const result = await processors[step](context, container, step);


const virusScan = async (context, container, step) => {
    let ctx = { ...context };


    // const file = ctx.job.data.file;
    const version = ctx.jobData.version;
    const jobUuid = ctx.jobUuid;

    const { info } = container;

    info("verdfddf", version);

    try {
        info(">>>tmp:", version.tmpPath);
        const scan = await handleScan(version, container);
        if (scan.infected) {
            await handleInfected(ctx);
            info("intected");
            return {
                success: false,
                step,
                status: container.FileStatus.VIRUS_FAILED,
                progress: container.ProgressMap.VIRUS_SCAN,
                message: "virus detected: " + scan,
                fileId: version.fileId,
                versionId: version.id
            }
        }

        info("ofkodkfd", scan)
        return {
            success: true,
            step,
            status: container.FileStatus.PROCESSING,
            progress: container.ProgressMap.VIRUS_SCAN,
            message: "scan virus success",
            fileId: version.fileId,
            versionId: version.id
        };

    } catch (err) {
        errorLog("ẻw", err);
        await handleError({
            version,
            jobUuid,
            container,
            err
        });
        return {
            success: false,
            step: step,
            message: "occur exception in virus scan",
            fileId: version.fileId,
            versionId: version.id,
            status: container.FileStatus.PROCESSING,
            progress: container.ProgressMap.VIRUS_SCAN,
            error: err
        }
    }

}

module.exports = {
    virusScan
}