const { FileStatus, ProgressMap } = require("../../../../constants");

const handleSucceeded = async (version, container, step) => {

    return {
        success: true,
        status: container.FileStatus.COMPLETED,
        progress: 100,
        message: "upload file pipeline success",
        fileId: version.fileId,
        versionId: version.id,
        step,
    };
}

module.exports = {
    handleSucceeded
}
