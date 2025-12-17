
function createApiContext(req) {
    console.log("ddddddd");

    return {
        userId: req?.user?.id,
        file: req?.file,
    };
}

module.exports = { createApiContext };
