
const { Worker } = require('bullmq');
const { createRedis } = require('../../config/redisClient');
const { queueNames, jobNames, messages } = require("../../constants");

const { runPipeline } = require("../workers/engine");
const logger = require('../../utils/logger');


const worker = new Worker(queueNames.FILE_QUEUE_NAME, async (job) => {
    logger.info('>>>start!!!!')
    await runPipeline(job);
}, {
    connection: createRedis(),
    skipStalledCheck: true,
    concurrency: 1,
    heartbeatInterval: 60000,
    metrics: false
});

worker.on(jobNames.JOB_STATUS.COMPLETED, job => {
    logger.info(messages.JOB_COMPLETED, job.id);
});

worker.on(jobNames.JOB_STATUS.FAILED, (job, err) => {
    logger.error(messages.JOB_FAILED, job.id, err);
});
