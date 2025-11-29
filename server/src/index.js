const configApp = require('./config/index');

const app = require('./app');
const logger = require('./utils/logger');
const startServer = () => {
    const PORT = configApp.app.port;

    app.listen(PORT, () => {
        logger.info(">>>App is listening on port " + PORT);
    })
}

startServer();
