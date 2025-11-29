const { createRedis } = require('../config/redisClient');
const { queueNames } = require("../constants");
const { Queue } = require('bullmq');

const fileQueue = new Queue(queueNames.FILE_QUEUE_NAME, {
    connection: createRedis(),
    defaultJobOptions: {
        attempts: 1,
        backoff: {
            type: 'exponential',
            daley: 5000
        },
        removeOnComplete: true,
        removeOnFail: false
    }
})



module.exports = { fileQueue };