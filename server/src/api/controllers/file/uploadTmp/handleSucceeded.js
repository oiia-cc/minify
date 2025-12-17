
const handleSucceeded = async (context, container) => {

    await container.auditLogService.createOne({
        actorType: "human",
        action: "humnan" + ".upload.accept",
        targetType: "file",
        targetId: context.fileId,
        details: {
            message: "uploadding"
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
