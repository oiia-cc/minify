const auditLogService = require('../../../../services/auditLog/auditLogService');
const { FileStatus } = require("../../../../constants");

const handleError = async (context, err) => {
    let ctx = { ...context };

    const file = ctx.job.data.file;
    const version = ctx.job.data.version;
    const jobUuid = ctx.jobUuid;
    const step = ctx.step;
    const info = ctx.info;

    info("scan error:", err);
    await ctx.auditLogService.createOne({
        action: "worker.processFileJob.scanVirusFailed",
        actorType: "worker",
        targetType: "job",
        targetId: jobUuid,
        details: {
            jobUuid,
            jobData: {
                fileId: version.fileId,
                versionId: version.id
            },
            error: err
        }
    });
}


module.exports = {
    handleError
}