
const createJobAndEnqueue = require('./createJobAndEnqueue');
const handleError = require('./handleError');
const handleSucceded = require('./handleSucceeded');

const addFileJob = async (ctx) => {
    console.log("__ctx:", ctx.versionService);
    let context = { ...ctx };
    const { file, version, info, errorLog } = context;

    try {
        const newVer = await ctx.versionService.updateOne(
            version.id, {
            status: 'processing'
        }
        );
        context.version = newVer;

        // create new db job and add job to queue
        context = await createJobAndEnqueue(context);

        await handleSucceded(context);

        return {
            success: true,
            message: "added job",
            context,

            data: {
                file,
                version
            }
        }
    } catch (err) {
        console.log(err);
        await handleError(ctx, err);
    }
}

module.exports = {
    addFileJob
}