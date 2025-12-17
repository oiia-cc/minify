
const handleError = async (ctx, container, err) => {
    const { errorLog } = container;

    const jobUuid = ctx.opts.jobUuid;
    const attempt = ctx.attemptsMade + 1;
    const maxAttempts = ctx.opts.attempts;

    errorLog("errrri:", jobUuid, "ee:", err);

    const jobRecord = await container.jobService.updateOne(jobUuid, {
        status: "failed",
        lastError: err.message
    });

    // Nếu còn retry → để BullMQ xử lý
    if (attempt + 1 < maxAttempts) {
        throw err; // BẮT BUỘC: ĐỂ BullMQ RETRY
    }

    await container.jobService.updateOne(jobUuid, {
        status: "dead_letter",
        lastError: err
    });

    // Hết retry → đưa vào DLQ

    await container.auditLogService.createOne({
        action: "worker.processFileJob.failed",
        actorType: "worker",
        targetType: "context",
        targetId: jobUuid,
        // details: {
        //     jobUuid,
        //     jobData: {
        //         fileId: version.fileId,
        //         versionId: version.id,
        //     },
        //     error: err
        // }
    });
    await container.notificationService.createOne({
        userId: ctx.job.data.file.ownerId,
        payload: {
            success: false,
            message: "failed-uploaded-files",
            fileId: version.fileid,
            versionId: version.id,
        }
    })
    await container.publishEvent("fileUpdate", {
        success: false,
        status: "pipeline_failed",
        message: err.message,
        error: err,
        fileId: version?.fileId,
        versionId: version?.id,
        // data: ctx.job.data
    });
    errorLog("succeeded handle err")

}

module.exports = handleError