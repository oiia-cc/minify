const { virusScan } = require('../../processors/virusScan');
const { updateFinal } = require('../../processors/updateFinal');
const { info } = require('../../../utils/logger');
const { publishEvent } = require('../../../events/eventPublisher');

const processors = {
    VIRUS_SCAN: virusScan,
    FINALIZE: updateFinal
}

const runPipelineHelper = async (context) => {
    let ctx = { ...context };
    const { pipeline, job, jobUuid } = ctx;

    for (const step of pipeline) {
        info(">>>step:", step);
        // const result = await processors[step](job.data, job.name, jobUuid, step);
        ctx.step = step;
        const result = await processors[step](ctx);

        info(">>>resultst:", result);
        if (result && result.success === true) {
            await ctx.publishEvent("fileUpdate", {
                success: true,
                step,
                status: result.status,
                progress: result.progress,
                message: result.message,

                fileId: result.version.fileId,
                versionId: result.version.id,

                data: {
                    file: result.file,
                    version: result.version
                },

                error: result.error || null
            })
        }
        info(">>>step-ok:", step);

        if (result && result.success === false) {
            throw new Error(result.message || "Step failed");
        }
    }
}

module.exports = {
    runPipelineHelper
}