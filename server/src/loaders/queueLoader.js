const { fileQueue } = require('../queue/queueConfig');
const { Worker } = require('bullmq');
const { processFileJob } = require('../worker/processors/fileProcessor');

export function startWorker() {
    const worker = new Worker('fileQueue', async job => {
        if (job.name === 'processFile') {
            await processFileJob(job.data);
        }
    }, { connection: fileQueue.opts.connection });

    return worker;
}