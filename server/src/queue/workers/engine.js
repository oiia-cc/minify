
const Pipelines = require('../Pipelines');

const { dedupCheck } = require('../processors/dupCheck');
const { virusScan } = require('../processors/virusScan')
const { optimize } = require('../processors/optimize');
const { updateFinal } = require('../processors/updateFinal');
const { publishEvent } = require('../../events/eventPublisher');

const processors = {
    dedupCheck: dedupCheck,
    virusScan: virusScan,
    optimize: optimize,
    updateFinal: updateFinal
}

const runPipeline = async (job) => {
    const pipeline = Pipelines[job.name];

    try {
        for (const step of pipeline) {
            const status = await processors[step](job.data, job.name);
            // console.log(">>> ok, ", job.data);
            await publishEvent("fileUpdate", {
                success: true,
                status: status
            })
        }
    } catch (e) {
        // console.log(">>> e", e.message);
        await publishEvent("fileUpdate", {
            success: false,
            status: e.message
        })
    }
}

module.exports = {
    runPipeline
}
