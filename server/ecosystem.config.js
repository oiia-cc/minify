module.exports = {
    apps: [{
        name: "API",
        script: './src',
        max_restarts: 2,
        instances: 1,
        autorestart: true,
        env_production: {
            NODE_ENV: "production"
        }
    }, {
        name: 'Worker',
        script: './src/queue/workers/fileWorker.js',
        max_restarts: 2,
        instances: 1,
        autorestart: true,
        env_production: {
            NODE_ENV: "production"
        }
    }]
}