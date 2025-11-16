require('dotenv').config({
    path: require('path').resolve(__dirname, '../../.env.dev'),
});

const app = require('./src/app');
const config = require('./src/config');
const logger = require('./src/utils/logger');

const PORT = config.PORT;

app.listen(PORT, () => {
    logger.info("app is listening on port " + PORT);
}) 