
const { JOB_BULLMQ_STATUS, FILE_QUEUE_NAME } = require("../../constants");

const { Worker } = require('bullmq');
const { createRedis } = require('../../config/redisClient');
const { info, errorLog } = require('../../utils/logger');
const { runPipeline } = require("../workers/runPipeline");

const { createWorkerContext } = require('./createContext');


const worker = new Worker(FILE_QUEUE_NAME, async (job) => {
    const context = createWorkerContext(job);

    info('>>>start!!!!');
    await runPipeline(context);
}, {
    connection: createRedis(),
    skipStalledCheck: true,
    concurrency: 1,
    heartbeatInterval: 60000,
    metrics: false
});

worker.on(JOB_BULLMQ_STATUS.COMPLETED, job => {
    info(JOB_BULLMQ_STATUS.COMPLETED, job.id);
});

worker.on(JOB_BULLMQ_STATUS.FAILED, (job, err) => {
    errorLog(JOB_BULLMQ_STATUS.FAILED, job.id, err);
});

module.exports = worker;
