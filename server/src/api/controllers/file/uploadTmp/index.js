const handleSucceeded = require('./handleSucceeded');
const handleError = require('./handleError');
const { createApiContext } = require('../../../createContext');

const uploadTmp = async (req, res, next) => {
    let context = createApiContext(req);

    const { info } = context;

    try {
        info("controller")

        info(">>>user", context.userId);

        // console.log(">>> file: ", file);
        // console.log("PRISMA VERSION:", require("@prisma/client").Prisma?.prismaVersion);
        const result1 = await context.fileUploadAppService.uploadTmp(context);

        if (!result1.success) {
            return res.status(result1.status).json(result1.response);
        }

        context = result1.context;

        const result2 = await handleSucceeded(context);

        info("ooook")
        return res.status(result2.status).json(result2.response);

    } catch (err) {
        await handleError(context);
        next(err);
    }
}

module.exports = uploadTmp;