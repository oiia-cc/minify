const supabase = require('../../../../config/supabaseClient');
const { scanBuffer } = require('../../../../services/virus/scanner');


const handleScan = async (version, container) => {
    const { tmpPath } = version;

    const { data: blob } = await supabase.storage.from("tmp").download(tmpPath);

    const buffer = Buffer.from(await blob.arrayBuffer())

    const scan = await scanBuffer(buffer);

    container.info(88888888, scan);
    return scan;
}

module.exports = {
    handleScan
}