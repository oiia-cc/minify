const supabase = require('../../../../config/supabaseClient');
const { scanBuffer } = require('../../../../services/virus/scanner');


const handleScan = async (context) => {
    const { version } = context;
    const { tmpPath } = version;
    context.info("ttttt", version);


    context.info("fdfffff", context.file);
    const { data: blob } = await supabase.storage.from("tmp").download(tmpPath);
    const buffer = Buffer.from(await blob.arrayBuffer())
    const scan = await scanBuffer(buffer);

    return scan;
}

module.exports = {
    handleScan
}