
const Pipelines = require('../Pipelines');

const { dedupCheck } = require('../processors/dupCheck');
const { virusScan } = require('../processors/virusScan')
const { optimize } = require('../processors/optimize');
const { updateFinal } = require('../processors/updateFinal');
const { publishEvent } = require('../../events/eventPublisher');
const { info } = require('../../utils/logger');

const processors = {
    dedupCheck: dedupCheck,
    virusScan: virusScan,
    optimize: optimize,
    updateFinal: updateFinal
}

const runPipeline = async (job) => {
    const pipeline = Pipelines[job.name];
    info(">>>pline:", pipeline);
    try {
        for (const step of pipeline) {
            info(">>>step:", step);

            const status = await processors[step](job.data, job.name);
            // console.log(">>> ok, ", job.data);
            await publishEvent("fileUpdate", {
                success: true,
                status: status
            })
            info(">>>step-ok:", step);

        }
    } catch (e) {
        // console.log(">>> e", e.message);
        await publishEvent("fileUpdate", {
            success: false,
            status: e.message
        })
        info(">>>step-fail:", e);

    }
}

module.exports = {
    runPipeline
}
