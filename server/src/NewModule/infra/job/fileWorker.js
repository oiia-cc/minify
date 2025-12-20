const { createRedis, Worker } = require('../../container/workerContainer');

class FileWorker {
  constructor({ Worker, FILE_QUEUE_NAME = 'fileQueue', createRedis }) {
    const worker = new Worker(
      FILE_QUEUE_NAME,
      async (job) => {
        console.log('>>>>>JOBEUN');
      },
      {
        connection: createRedis(),
        skipStalledCheck: true,
        concurrency: 1,
        heartbeatInterval: 60000,
        metrics: false,
      }
    );

    worker.on('completed', (job) => {
      console.log('completed', job.id);
    });

    worker.on('failed', (job, err) => {
      console.log('failed', job.id, err);
    });

    return worker;
  }
}

const fileWorker = new FileWorker({ Worker, createRedis });

module.exports = { fileWorker };
