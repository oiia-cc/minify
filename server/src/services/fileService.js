const supabase = require('../loaders/storageLoader');

const uploadToTmp = async (file, userId) => {
    const tmpPath = `tmp/${userId}/${file.originalname}`;

    const { data, error } = await supabase
        .storage
        .from("tmp")
        .upload(tmpPath, file.buffer, {
            contentType: file.mimetype,
            upsert: true
        });


    if (error) {
        throw new Error("Upload to storage /tmp failed")
    }

    return {
        filename: file.originalname,
        size: file.size,
        mime: file.mimetype,
        path: data.path,
        id: data.id
    }
}

module.exports = {
    uploadToTmp
};