const { scanBuffer } = require("../../services/virus/scanner")
const supabase = require('../../config/supabaseClient');
const fileVerisonService = require('../../services/version/versionService');
const { jobNames } = require('../../constants');

const virusScan = async ({ versionId, tmpPath }) => {
    // console.log(">>>tmp:", tmpPath);

    const { data: blob } = await supabase.storage.from("tmp").download(tmpPath);
    const buffer = Buffer.from(await blob.arrayBuffer())

    const scan = await scanBuffer(buffer);

    if (scan.infected) {
        await fileVerisonService.updateStatus(versionId, jobNames.FILE_STATUS.VIRUS_FAILED);
        throw new Error(jobNames.FILE_STATUS.VIRUS_FAILED);
    }

    return `NO_VIRUS`;
}

module.exports = {
    virusScan
}