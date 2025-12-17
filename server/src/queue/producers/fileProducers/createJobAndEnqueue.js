const createJobAndEnqueue = async (version, container) => {
    const { info } = container;

    const prismaJob = await container.jobService.createOne({
        jobType: "UPLOAD_FILE",
        payload: version,
        fileVersionId: version.id
    });

    info("prismajob:", prismaJob);

    const jobUuid = prismaJob.jobUuid;

    await container.fileQueue.add('FILE_PROCESS_JOB', {
        version,
    }, {
        jobUuid: jobUuid
    })

    return jobUuid;
}

module.exports = { createJobAndEnqueue };

