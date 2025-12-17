const createContainer =  require("../../container");
const express = require('express');


async function createExpressApp() {
    // create container
    const app = express();

    return app;
}

module.exports = createExpressApp; 