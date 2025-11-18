const { createRedis } = require('../config/redisClient');
const { FILE_QUEUE_NAME } = require("../constants/jobNames");
const { Queue } = require('bullmq');

const fileQueue = new Queue(FILE_QUEUE_NAME, {
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