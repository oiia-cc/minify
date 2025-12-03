const handleSucceded = async (ctx) => {
    const { file, version, prismaJob } = ctx;

    await ctx.auditLogService.createOne({
        actorType: "system",
        action: "system.addJob.succeeded",
        details: {
            jobDb: prismaJob
        }
    });

    await ctx.auditLogService.createOne({
        actorType: "system",
        action: "system.addJob.succeeded",
        details: {
            fileId: file.id,
            versionId: version.id
        }
    });

}

module.exports = handleSucceded;
