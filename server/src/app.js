
const express = require('express');

const fileRoutes = require('./api/routes/fileRoutes');
const eventRoutes = require('./api/controllers/eventController');

const errorHandler = require('./api/middlewares/errorHandler');
const unknown = require('./api/middlewares/unknown');
const rateLimit = require('./api/middlewares/rateLimit');
const { authenticate } = require('./api/middlewares/auth');
const loginRoutes = require('./api/routes/loginRoutes');

const app = express();

app.use(express.static('dist'));
app.set('trust proxy', true);
app.use(rateLimit);
app.use(express.json({ limit: '5mb' }));

app.get('/api/health', (_, res) => res.status(200).json({ status: "ok!" }))
app.use('/api/login', loginRoutes);
app.use('/api/v1/files', fileRoutes);
app.get("/api/events", eventRoutes)

app.use(unknown);
app.use(errorHandler);

module.exports = app;
