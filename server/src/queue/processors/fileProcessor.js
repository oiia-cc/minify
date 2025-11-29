const { FILE_STATUS } = require('../../constants/jobNames.js');
const fileService = require('../../services/file/fileService.js');
const { publishEvent } = require('../../events/eventPublisher.js');
const fileVerisonService = require('../../services/version/versionService.js');
// const { scanFileJob } = require('../producers/fileProducer.js');
const { processVirusScan } = require('./virusScan.js');
const { dedupCheck } = require('./optimize.js');
const supabase = require('../../config/supabaseClient.js')

const processFileJob = async ({ versionId, userId, tmpPath, fileId }) => {

    const { data: blob } = await supabase.storage.from("tmp").download(tmpPath);
    const buffer = Buffer.from(await blob.arrayBuffer())
    // const result = await fileService.moveToFinal(tmpPath, userId, versionId);
    console.log(">>> tmpP: ", tmpPath);

    const virusResult = await processVirusScan(versionId, userId, tmpPath);

    if (!virusResult.success) {
        await publishEvent("fileUpdate",
            {
                userId,
                versionId: versionId,
                status: "viruss detect"
            }
        )
        return;
    }
    const dedupResult = await dedupCheck(buffer, fileId, userId, versionId);
    console.log(">>> dedupr:", dedupResult);


    // optimise ...
    await fileVerisonService.updateStatus(versionId, FILE_STATUS.COMPLETED);

    await publishEvent("fileUpdate",
        {
            userId,
            versionId: versionId,
            status: FILE_STATUS.COMPLETED
        }
    )
}

module.exports = { processFileJob };