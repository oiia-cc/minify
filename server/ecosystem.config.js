module.exports = {
    apps: [{
        name: "API",
        script: './index.js',
        env_production: {
            NODE_ENV: "production"
        }
    }, {
        name: 'Worker',
        script: './src/queue/workers/fileWorker.js',
        env_production: {
            NODE_ENV: "production"
        }
    }]
}