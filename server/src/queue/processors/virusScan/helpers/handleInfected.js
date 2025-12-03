const { FileStatus } = require("../../../../constants");
const auditLogService = require('../../../../services/auditLog/auditLogService');


const handleInfected = async (context) => {
    const ctx = { ...context };
    const { version, jobUuid, step } = ctx;

    const versionId = version.id;

    await ctx.verisonService.updateStatus(
        versionId,
        ctx.FileStatus.VIRUS_FAILED
    );

    await auditLogService.createOne({
        action: "worker.processFileJob.scanVirusFailed",
        actorType: "worker",
        targetType: "job",
        targetId: jobUuid,
        details: {
            jobUuid,
            jobData: {
                userId: version.userId,
                fileId: version.fileId,
                versionId: version.id
            }
        }
    });
}

module.exports = {
    handleInfected
}