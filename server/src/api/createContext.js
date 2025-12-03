const { createContainer } = require('../container');

function createApiContext(req) {
    const container = createContainer();

    return {
        ...container,
        userId: req?.user?.id,
        file: req?.file,
    };
}

module.exports = { createApiContext };
