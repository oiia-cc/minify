const configApp = require('./src/config/index');

const app = require('./src/app');
const logger = require('./src/utils/logger');
console.log(">>config:", configApp)
const startServer = () => {
    const PORT = configApp.app.port;

    app.listen(PORT, () => {
        logger.info(">>>App is listening on port " + PORT);
    })
}

startServer();
