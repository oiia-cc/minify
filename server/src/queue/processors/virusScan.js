const { scanBuffer } = require("../../services/virus/scanner")
const supabase = require('../../loaders/storageLoader');
const prisma = require('../../database');
const fileVerisonService = require('../../services/version/fileVersionService');

const virusScan = async (props) => {

    console.log(">>> props", props);

    const { versionId, userId, tmpPath } = props;
    console.log(">>> virusscan");

    const { data: blob } = await supabase.storage.from("tmp").download(tmpPath);
    const buffer = Buffer.from(await blob.arrayBuffer())

    const scan = await scanBuffer(buffer);

    if (scan.infected) {
        await fileVerisonService.updateStatus(versionId, "virus_failed");
        throw new Error(`VIRUSS_DETECTED`);
    }

    return `NO_VIRUSS`;
}

module.exports = {
    virusScan
}