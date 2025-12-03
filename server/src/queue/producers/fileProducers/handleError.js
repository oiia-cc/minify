const handleError = async (ctx, err) => {

    await ctx.auditLogService.createOne({
        actorType: "system",
        action: "addJob",
        details: {
            reason: "exception",
            error: err
        }
    });
    return {
        success: false,
        message: err.message,
        context: ctx,
        data: {
            file: origin.file,
            version: origin.version
        }
    }
}

module.exports = handleError;