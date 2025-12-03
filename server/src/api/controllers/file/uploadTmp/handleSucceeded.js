
const handleSucceeded = async (context) => {

    await context.auditLogService.createOne({
        actorType: "human",
        action: "humnan" + ".upload.accept",
        targetType: "file",
        targetId: context.fileId,
        details: {
            uploaded: context.file
        }
    });

    return {
        status: 201,
        success: true,
        context,
        response: {
            message: "File uploaded to [tmp] successfully!",
            fileId: context.fileId,
            versionId: context.versionId,
        },
    }
}


module.exports = handleSucceeded
