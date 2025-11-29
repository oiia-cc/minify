
const Pipelines = require('../Pipelines');
const { eventName } = require('../../constants');
const { virusScan } = require('../processors/virusScan');
const { updateFinal } = require('../processors/updateFinal');
const { publishEvent } = require('../../events/eventPublisher');
const { info } = require('../../utils/logger');

const processors = {
    virusScan: virusScan,
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
            await publishEvent(eventName.FILE_UPDATE, {
                success: true,
                status: status
            })
            info(">>>step-ok:", step);

        }
    } catch (e) {
        // console.log(">>> e", e.message);
        await publishEvent(eventName.FILE_UPDATE, {
            success: false,
            status: e.message
        })
        info(">>>step-fail:", e);

    }
}

module.exports = {
    runPipeline
}
