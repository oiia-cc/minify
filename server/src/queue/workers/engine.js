const pipelines = {
    PROCESS_FILE: ["virusScan", "optimize", "moveToFinal"],
    UPDATE_VERSION: ["virus", "dupcheck", "optimize", "moveToFinal"],
}

const { dedupCheck } = require('../processors/dupCheck');
const { virusScan } = require('../processors/virusScan')
const { optimize } = require('../processors/optimize');
const { moveToFinal } = require('../../services/file/fileService');
const { publishEvent } = require('../../events/eventPublisher');


const processors = {
    dedupCheck: dedupCheck,
    virusScan: virusScan,
    optimize: optimize,
    moveToFinal: moveToFinal
}

const runPipeline = async (job) => {
    const pipeline = pipelines[job.name];
    try {
        for (const step of pipeline) {
            const status = await processors[step](job.data, job.name);
            // console.log(">>> ok, ", status);
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
