require('dotenv').config({
    path: require('path').resolve(__dirname, '../../.env.dev'),
});
const { Worker } = require('bullmq');
const { connection } = require('../queue/queueConfig');
const { processFileJob } = require('./processors/fileProcessor');
const logger = require('../utils/logger');
const { log } = require('console');

const worker = new Worker('fileQueue', async (job) => {
    if (job.name === 'processFile') {
        await processFileJob(job.data);
    }
}, {
    connection,
    skipStalledCheck: true,
    concurrency: 1,
    heartbeatInterval: 60000,
    metrics: { maxDataPoints: 0 }
});

worker.on('completed', job => {
    logger.info('Job complete', job.id);
});

worker.on('failed', (job, err) => {
    logger.error('Job failed', job.id, err);
});
