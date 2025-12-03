const createJobAndEnqueue = async (ctx) => {
    let context = { ...ctx };
    const { info, file, version } = context;

    const prismaJob = await ctx.jobService.createOne({
        jobType: "UPLOAD_FILE",
        payload: context.version,
        fileVersionId: context.version.id
    });
    info("prismajob:", prismaJob);

    await ctx.fileQueue.add('FILE_PROCESS_JOB', {
        file,
        version: context.version
    }, {
        jobUuid: prismaJob.jobUuid
    })
    context.prismaJob = prismaJob;

    return context;
}

module.exports = createJobAndEnqueue;