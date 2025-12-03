

const validate = (context) => {
    if (!context.file) {
        return {
            status: 400,
            success: false,
            response: {
                message: "No file provided"
            },
        };
    }
    if (!context.userId) {
        return {
            status: 401,
            success: false,
            response: {
                message: "Unauthorized"
            },
        };
    }
    return {
        status: 200,
        success: true,
        response: {
            message: "ok"
        },
    };
}

const createFileAndVersion = async (context) => {
    const { userId, file, info } = context
    const newFile = await context.fileService.createOne({
        ownerId: userId,
        displayName: file.originalname,
        isDeleted: false
    })

    info(">>>newfile:", newFile)

    const hash = await context.hash(file.buffer);

    const ver1 = await context.versionService.createOne({
        storagePath: "init",
        tmpPath: "init",
        status: "uploaded",
        versionNumber: 1,
        sizeBytes: file.size,
        hash: hash,
        filename: file.originalname,
        mimeType: file.mimetype,
        fileId: newFile.id
    });
    return { newFile, ver1 }
}


const uploadTmp = async (context) => {
    const ctx = { ...context };
    const { userId, file, info } = ctx;

    info(">>>userId:", userId);
    const result = validate(ctx);

    if (!result.success) {
        info("failed upload:", result)
        return {
            ctx,
            result
        };
    }

    // console.log(">", uploaded.filename);
    // console.log(">>>f:", file);
    try {
        const { newFile, ver1 } = await createFileAndVersion(ctx);

        const tmpPath = `${newFile.ownerId}/${newFile.id}/${ver1.id}/${ver1.filename}`;
        /* upload file to tmp bucket*/
        await context.storageService.uploadToTmp({
            tmpPath,
            buffer: file.buffer,
            mimeType: file.mimeType
        });

        info(3333333);

        const ver2 = await context.versionService.updateOne(ver1.id, {
            status: ctx.FileStatus.QUEUED,
            tmpPath: tmpPath,
        });

        ctx.file = newFile;
        ctx.version = ver2

        info(111111);
        await context.addFileJob(ctx);

        info("fileUpload:", true)
        return {
            status: 200,
            success: true,
            context: ctx,
            response: {
                message: "added file job",
                fileId: newFile.id,
                versionId: ver2.id,
            },
        }
    } catch (e) {

        return {
            status: 500,
            success: false,
            context,
            response: {
                message: "failed to add job",
                error: {
                    code: e.code,
                    message: e.message
                },
                fileId: file.id
            },
        }
    }
}

module.exports = {
    uploadTmp
}