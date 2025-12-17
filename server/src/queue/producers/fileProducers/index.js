
const { createJobAndEnqueue } = require('./createJobAndEnqueue');
const handleError = require('./handleError');
const handleSucceded = require('./handleSucceeded');

const addFileJob = async (ctx, container, version) => {
    // console.log("__ctx:");
    let context = { ...ctx };
    const { fileId, versionId } = context;
    const { info, errorLog } = container;

    info("eeeeo", ctx)

    try {
        await container.versionService.updateOne(
            versionId, {
            status: 'processing'
        });
        // create new db job and add job to queue
        const jobUuid = await createJobAndEnqueue(version, container);

        await handleSucceded(context, container, jobUuid);
        return {
            success: true,
            message: "added job",
            context,
            data: {
                jobUuid,
                fileId: context.versionId,
                versionId: context.fileId
            }
        }
    } catch (err) {
        console.log(err);
        await handleError(ctx, container, err);
    }
}

module.exports = {
    addFileJob
}