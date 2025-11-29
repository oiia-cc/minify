
const { Worker } = require('bullmq');
const { createRedis } = require('../../config/redisClient');
const { FILE_QUEUE_NAME, FILE_PROCESS_JOB } = require("../../constants/jobNames");
const logger = require('../../utils/logger');
const { runPipeline } = require("../workers/engine");

const worker = new Worker(FILE_QUEUE_NAME, async (job) => {
    runPipeline(job);
}, {
    connection: createRedis(),
    skipStalledCheck: true,
    concurrency: 1,
    heartbeatInterval: 60000,
    metrics: false
});

worker.on('completed', job => {
    logger.info('Job complete', job.id);
});

worker.on('failed', (job, err) => {
    logger.error('Job failed', job.id, err);
});
