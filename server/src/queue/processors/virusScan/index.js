const { info } = require("../../../utils/logger");
const { handleError } = require("./helpers/handleError");
const { handleScan } = require("./helpers/handleScan");
const { handleInfected } = require("./helpers/handleInfected");

const virusScan = async (context) => {
    let ctx = { ...context };

    const file = ctx.job.data.file;
    const version = ctx.job.data.version;
    const jobUuid = ctx.jobUuid;
    const step = ctx.step;

    ctx.file = file;
    ctx.version = version;
    ctx.jobUuid = jobUuid;
    ctx.step = step;

    const { info } = ctx;

    info("verdfddf", ctx);

    try {
        info(">>>tmp:", version.tmpPath);
        const scan = await handleScan(ctx);
        if (scan.infected) {
            await handleInfected(ctx);
            info("intected");
            return {
                success: false,
                step,
                status: ctx.FileStatus.VIRUS_FAILED,
                message: "virus detected: " + scan
            }
        }

        info("ofkodkfd")
        return {
            success: true,
            step,
            status: ctx.FileStatus.PROCESSING,
            progress: ctx.ProgressMap.VIRUS_SCAN,
            message: "scan virus success",
            file,
            version
        };

    } catch (err) {

        await handleError(context, err);
        return {
            success: false,
            step: step,
            message: "occur exception in virus scan",
            error: err
        }
    }

}

module.exports = {
    virusScan
}