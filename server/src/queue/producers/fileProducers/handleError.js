const handleError = async (ctx, container, err) => {

    await container.auditLogService.createOne({
        actorType: "system",
        action: "addJob",
        details: {
            reason: "exception",
            error: err
        }
    });
    container.info("eeeeettt", err);

    return {
        success: false,
        message: err.message,
        context: ctx,
        data: {
            fileId: ctx.fileId,
            version: ctx.versionId
        }
    }

}

module.exports = handleError;