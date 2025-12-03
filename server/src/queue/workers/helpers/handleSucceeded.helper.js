
const handleSucceededHelper = async (context) => {
    // Hoàn tất pipeline
    const { jobUuid, job } = context;

    await context.jobService.updateOne(jobUuid, {
        status: "succeeded"
    });

    await context.auditLogService.createOne({
        action: "worker.processFileJob.succeeded",
        actorType: "worker",
        targetType: "job",
        targetId: jobUuid,
        details: {
            jobUuid,
            jobData: {
                fileId: job.data.file.id,
                versionId: job.data.version.id,
                userId: job.data.version.userId
            }
        }
    });
    await context.notificationService.createOne({
        userId: job.data.file.ownerId,
        payload: {
            message: "succeeded-uploaded-files",
            success: true,
            fileId: job.data.file.id,
            versionId: job.data.version.id,
        }
    })

    // await context.publishEvent("fileUpdate", {
    //     success: true,
    //     step,
    //     status: result.status,
    //     progress: result.progress,
    //     message: result.message,

    //     fileId: result.version.fileId,
    //     versionId: result.version.id,

    //     data: {
    //         file: result.file,
    //         version: result.version
    //     },

    //     error: result.error || null
    // })

}

module.exports = {
    handleSucceededHelper
}
