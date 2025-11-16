require('dotenv').config({
    path: require('path').resolve(__dirname, '../.env.dev'),
});

const express = require('express');
const cors = require('cors');

const fileRoutes = require('./api/routes/fileRoutes');
const errorHandler = require('./api/middlewares/errorHandler');
const unknown = require('./api/middlewares/unknown');
const rateLimit = require('./api/middlewares/rateLimit');

const app = express();

app.use(cors());

app.use(rateLimit);
app.use('/api/v1/files', fileRoutes);

app.use(express.json({ limit: '5mb' }));

app.get('/health', (_, res) => res.status(200).json({ status: "ok!" }))

app.use(unknown);
app.use(errorHandler);

module.exports = app;
