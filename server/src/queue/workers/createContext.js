const { FILE_QUEUE_NAME, JOB_BULLMQ_STATUS, Pipelines, JOB_DB_STATUS, FileStatus, ProgressMap } = require('../../constants');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');
const { createContainer } = require('../../container');

function createWorkerContext(job) {
    const container = createContainer();

    const context = {
        ...container,
        FileStatus,
        ProgressMap,
        JOB_BULLMQ_STATUS,
        FILE_QUEUE_NAME,
        FILE_PROCESS_JOB,
        JOB_DB_STATUS,
        job,
        data: job.data,
        step: null,
        Pipelines,

    };
    // job.context = context;
    return context;
}

module.exports = { createWorkerContext };
