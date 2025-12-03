const { FileStatus, ProgressMap } = require("../../../../constants");

const handleSucceeded = async ({ version, file, step }) => {


    return {
        success: true,
        status: FileStatus.COMPLETED,
        progress: 100,
        message: "upload file pipeline success",
        fileId: version.fileId,
        versionId: version.id,
        step,
        file,
        version
    };
}

module.exports = {
    handleSucceeded
}
