import { FILE_PROCESS_JOB, FILE_QUEUE_NAME } from '../constants/jobNames';

const { fileQueue } = require('../queue/queueConfig');
const { Worker } = require('bullmq');
const { processFileJob } = require('../worker/processors/fileProcessor');

export function startWorker() {
    const worker = new Worker(FILE_QUEUE_NAME, async job => {
        if (job.name === FILE_PROCESS_JOB) {
            await processFileJob(job.data);
        }
    }, { connection: fileQueue.opts.connection });

    return worker;
}