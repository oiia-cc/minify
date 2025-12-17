const loginRoutes = require('./routes/loginRoutes');


const fileRoutes = require('../../../api/routes/fileRoutes');
const eventRoutes = require('../../../api/routes/eventRoutes');
// const userRoutes = require('../../../api/routes/userRoutes');
const jobRoutes = require('../../../api/routes/jobRoutes');
const { authenticate, authorize, isAdmin, PERMISSIONS } = require('../../../api/middlewares/auth');
const aboutRoutes = require('../../../api/routes/aboutRoutes');
const express = require("express");
const rateLimit = require('../../../api/middlewares/rateLimit');
const unknown = require('../../../api/middlewares/unknown');
const errorHandler = require('../../../api/middlewares/errorHandler');
const { scopePerRequest} = require('awilix-express');

const loadRoutesAndMiddles = async (app, container) => {
    app.use(express.static('dist'));
    app.set('trust proxy', 1);
    app.use(rateLimit);
    app.use(express.json({ limit: '5mb' }));


    // app.use(scopePerRequest(container));

    app.use('/api/health', (_, res) => res.status(200).json({ status: "ok!" }))
    app.use('/api/auth/login', loginRoutes);

    app.use('/api/v1/files',
        authenticate,
        authorize(PERMISSIONS.FILE_WRITE),
        fileRoutes
    );

    app.use("/api/events",
        eventRoutes
    );

    // app.use('/api/v1/users',
    //     authenticate,
    //     userRoutes
    // );

    app.use('/api/auth/me',
        authenticate,
        aboutRoutes
    );

    app.use('/admin/jobs',
        authenticate,
        isAdmin,
        jobRoutes
    )


        app.use(unknown);
        app.use(errorHandler);
};

module.exports = loadRoutesAndMiddles;