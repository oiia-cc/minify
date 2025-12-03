
const handleError = async (ctx, err) => {
    const errorLog = ctx.errorLog;


    const jobUuid = ctx.job.opts.jobUuid;
    const attempt = ctx.job.attemptsMade + 1;
    const maxAttempts = ctx.job.opts.attempts;
    // const pipeline = ctx.Pipelines[ctx.job.name];

    errorLog("errrri:", jobUuid, "ee:", err);

    const jobRecord = await ctx.jobService.updateOne(jobUuid, {
        status: "failed",
        lastError: err.message
    });

    // Nếu còn retry → để BullMQ xử lý
    if (attempt + 1 < maxAttempts) {
        throw err; // BẮT BUỘC: ĐỂ BullMQ RETRY
    }

    await ctx.jobService.updateOne(jobUuid, {
        status: "dead_letter",
        lastError: err.message
    });

    // Hết retry → đưa vào DLQ

    await ctx.auditLogService.createOne({
        action: "worker.processFileJob.failed",
        actorType: "worker",
        targetType: "context",

        targetId: jobUuid,
        details: {
            jobUuid,
            jobData: {
                fileId: ctx.job.data.file.id,
                versionId: ctx.job.data.version.id,
                userId: ctx.job.data.version.userId
            },
            error: err.message
        }
    });
    await ctx.notificationService.createOne({
        userId: ctx.job.data.file.ownerId,
        payload: {
            success: false,
            message: "failed-uploaded-files",
            fileId: ctx.job.data.file.id,
            versionId: ctx.job.data.version.id,
        }
    })
    await ctx.publishEvent("fileUpdate", {
        success: false,
        status: "pipeline_failed",
        message: err.message,
        error: err,
        fileId: ctx.job.data?.version?.fileId,
        versionId: ctx.job.data?.version?.id,
        // data: ctx.job.data
    });
    errorLog("succeeded handle err")

}

module.exports = handleError