const { FILE_QUEUE_NAME, JOB_BULLMQ_STATUS, Pipelines, JOB_DB_STATUS, FileStatus, ProgressMap } = require('../../constants');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');
const { info } = require('../../utils/logger');

function createWorkerContext(job) {
    // info()

    const context = {
        jobName: job.name,
        step: null,
        attemptsMade: job.attemptsMade,
        jobData:
        {
            version: job.data.version,
        },
        opts: job.opts,

    };
    return context;
}

module.exports = { createWorkerContext };
