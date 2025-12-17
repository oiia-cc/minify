
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

const createFileAndVersion = async (context, container) => {
    const { userId, file } = context
    const { info } = container;

    const newFile = await container.fileService.createOne({
        ownerId: userId,
        displayName: file.originalname,
        isDeleted: false
    })

    info(">>>newfile:", newFile)

    const hash = await container.hash(file.buffer);

    const ver1 = await container.versionService.createOne({
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


const uploadTmp = async (context, container) => {
    const ctx = { ...context };
    const { userId, file } = ctx;
    const { info } = container;
    info(">>>userId:", userId);
    const validateResult = validate(ctx);

    if (!validateResult.success) {
        info("failed upload:", validateResult)
        return {
            context,
            result: validateResult
        };
    }

    // console.log(">", uploaded.filename);
    // console.log(">>>f:", file);
    try {
        const { newFile, ver1 } = await createFileAndVersion(ctx, container);

        const tmpPath = `${newFile.ownerId}/${newFile.id}/${ver1.id}/${ver1.filename}`;
        /* upload file to tmp bucket*/
        await container.storageService.uploadToTmp({
            tmpPath,
            buffer: file.buffer,
            mimeType: file.mimeType
        });

        info(3333333);

        const ver2 = await container.versionService.updateOne(ver1.id, {
            status: container.FileStatus.QUEUED,
            tmpPath: tmpPath,
        });

        const fileId = newFile.id;
        const versionId = ver2.id;

        info(111111);
        delete ctx.file;
        const newCtx = {
            ...ctx,
            fileId,
            versionId
        }
        await container.addFileJob(newCtx, container, ver2);


        info("fileUploadCTL: End");
        return {
            status: 200,
            success: true,
            context: {
                ...newCtx
            },
            response: {
                message: "added file job",
                fileId: fileId,
                versionId: versionId,
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