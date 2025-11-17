const { BUCKET_TMP, BUCKET_FINAL } = require('../../constants/jobNames');
const supabase = require('../../loaders/storageLoader');

const uploadToTmp = async (file, userId) => {
    const tmpPath = `${userId}/${file.originalname}`;

    const { data, error } = await supabase
        .storage
        .from(BUCKET_TMP)
        .upload(tmpPath, file.buffer, {
            contentType: file.mimetype,
            upsert: true
        });

    if (error) {
        throw new Error("Uploaded to storage /tmp failed", error)
    }

    return {
        filename: file.originalname,
        size: file.size,
        mime: file.mimetype,
        path: data.path,
        id: data.id
    }
}

const moveToFinal = async (tmpPath, userId, fileId) => {
    const downloadResult = await supabase.storage.from(BUCKET_TMP).download(tmpPath);

    if (downloadResult.error) throw downloadResult.error;

    const finalPath = `/${userId}/${fileId}`;
    const { data, error } = await supabase.storage.from(BUCKET_FINAL).upload(finalPath, downloadResult.data);

    if (error) {
        throw error
    }
    return data;
}

module.exports = {
    uploadToTmp,
    moveToFinal
};