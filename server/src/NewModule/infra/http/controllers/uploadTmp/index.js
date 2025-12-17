const handleSucceeded = require('./handleSucceeded');
const handleError = require('./handleError');
const { createApiContext } = require('../../../../../api/createContext');
const getContainer = require('../../../../container');
const { errorLog } = require('../../../../../utils/logger');

const uploadTmp = async (req, res, next) => {
    const context = createApiContext(req);
    const container = getContainer();
    const { info } = container;

    try {
        const result1 = await container.fileUploadAppService.uploadTmp(context, container);

        if (!result1.success) {
            return res.status(result1?.status | 404).json(result1.response);
        }
        const newContext = result1.context;

        const result2 = await handleSucceeded(newContext, container);

        return res.status(result2.status).json(result2.response);

    } catch (err) {
        await handleError(context, container, err);
        errorLog(err);
    }
}

module.exports = uploadTmp;