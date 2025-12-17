
const handleSucceededHelper = async (context, container) => {
    // Hoàn tất pipeline
    const { jobUuid } = context.opts;
    const { version } = context.jobData;
    const { info } = container;

    await container.jobService.updateOne(jobUuid, {
        status: "succeeded"
    });

    await container.auditLogService.createOne({
        action: "worker.processFileJob.succeeded",
        actorType: "worker",
        targetType: "job",
        targetId: jobUuid,
        details: {
            jobUuid,
            jobData: {
                version
            }
        }
    });
    // await container.notificationService.createOne({
    //     userId: job.data.file.ownerId,
    //     payload: {
    //         message: "succeeded-uploaded-files",
    //         success: true,
    //         fileId: version.fileId,
    //         versionId: version.id,
    //     }
    // })

    info("ododod, ", context)
        ;
}

module.exports = {
    handleSucceededHelper
}
