class FileQueue {
  constructor(createRedis, Queue) {
    this.createRedis = createRedis;
    this.queueName = 'fileQueue';

    return new Queue('fileQueue', {
      connection: createRedis(),
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
        removeOnComplete: true,
        removeOnFail: false,
      },
    });
  }
}

module.exports = { FileQueue };
