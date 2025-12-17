const { virusScan } = require('../../processors/virusScan');
const { updateFinal } = require('../../processors/updateFinal');
const { info } = require('../../../utils/logger');
const { publishEvent } = require('../../../events/eventPublisher');

const processors = {
    VIRUS_SCAN: virusScan,
    FINALIZE: updateFinal
}

const runPipelineHelper = async (context, container, pipeline) => {
    let ctx = { ...context };
    const job = context.jobData;
    const jobUuid = context.opts.jobUuid;

    console.log("jobdđd", job);

    for (const step of pipeline) {
        //     info(">>>step:", step);
        const result = await processors[step](context, container, step);

        info("rreeeewwwwww", result)
        info(">>>resultst:", result);
        if (result && result.success === true) {
            await container.publishEvent("fileUpdate", {
                success: true,
                step,
                status: result.status,
                progress: result.progress,
                message: result.message,

                fileId: result.fileId,
                versionId: result.id,

                data: {
                    file: result.file,
                    version: result.version
                },

                error: result.error || null
            })
            info(">>>step-ok:", step);

        }
        info(">>>pieline-ok:");

        if (result && result.success === false) {
            throw new Error(result.message || "Step failed");
        }
    }
}

module.exports = {
    runPipelineHelper
}