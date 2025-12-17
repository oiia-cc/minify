const auditLogService = require('../../../../services/auditLog/auditLogService');
const { FileStatus } = require("../../../../constants");

const handleError = async ({ version, jobUuid, container, err }) => {
    const info = container.info;

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