
const handleError = async (ctx) => {

    await ctx.auditLogService.createOne({
        actorType: "user",
        action: "user" + ".upload.failed",
        targetType: "file",
        details: {
            userId: ctx.userId,
            reason: "exception",
            uploaded: ctx.file
        }
    });

}

module.exports = handleError