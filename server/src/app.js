
const express = require('express');
const cors = require('cors');

const fileRoutes = require('./api/routes/fileRoutes');
const eventRoutes = require('./api/controllers/eventController');

const errorHandler = require('./api/middlewares/errorHandler');
const unknown = require('./api/middlewares/unknown');
const rateLimit = require('./api/middlewares/rateLimit');

const app = express();

app.use(express.static('dist'));
app.use(rateLimit);
app.use(express.json({ limit: '5mb' }));

app.get('/api/health', (_, res) => res.status(200).json({ status: "ok!" }))
app.use('/api/v1/files', fileRoutes);
app.get("/api/events", eventRoutes)

app.use(unknown);
app.use(errorHandler);

module.exports = app;
