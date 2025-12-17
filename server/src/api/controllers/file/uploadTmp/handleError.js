
const handleError = async (ctx, container, err) => {

    await container.auditLogService.createOne({
        actorType: "user",
        action: "user" + ".upload.failed",
        targetType: "file",
        details: {
            userId: ctx.userId,
            reason: "exception",
            error: err
        }
    });

}

module.exports = handleError