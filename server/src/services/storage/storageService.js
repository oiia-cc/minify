const { BUCKET_TMP, BUCKET_FINAL } = require('../../constants/jobNames');
const supabase = require('../../config/supabaseClient');

const uploadToTmp = async ({ tmpPath, buffer, mimeType }) => {
    const { data, error } = await supabase
        .storage
        .from(BUCKET_TMP)
        .upload(tmpPath, buffer, {
            contentType: mimeType,
            upsert: true
        });

    if (error) {
        throw new Error("Uploaded to storage /tmp failed" + error)
    }

    return data
}

const moveToFinal = async ({ tmpPath }) => {

    const downloadResult = await supabase.storage.from(BUCKET_TMP).download(tmpPath);

    if (downloadResult.error) throw downloadResult.error;
    // console.log(">>> pat:", downloadResult);

    const finalPath = tmpPath;

    const { data, error } = await supabase.storage.from(BUCKET_FINAL).upload(finalPath, downloadResult.data, {
        upsert: true // This will overwrite if the file exists
    });
    // console.log(">>>fpath: ", data);


    if (error) {
        throw error
    }

    return "moved final";
}

module.exports = {
    uploadToTmp,
    moveToFinal
};