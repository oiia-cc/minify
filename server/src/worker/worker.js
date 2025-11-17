
const { Worker } = require('bullmq');
const redisConfig = require('../config/redis');
const { FILE_QUEUE_NAME, FILE_PROCESS_JOB } = require("../constants/jobNames");
const { processFileJob } = require('./processors/fileProcessor');
const logger = require('../utils/logger');

const connection = redisConfig();

const worker = new Worker(FILE_QUEUE_NAME, async (job) => {
    if (job.name === FILE_PROCESS_JOB) {
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
