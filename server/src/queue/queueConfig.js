const { createRedis } = require('../config/redisClient');
const { queueNames } = require("../constants");
const { Queue } = require('bullmq');

const fileQueue = new Queue('fileQueue', {
    connection: createRedis(),
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 5000
        },
        removeOnComplete: true,
        removeOnFail: false
    }
})

if (fileQueue) {
    console.log(">>>fileQ created ");

}


module.exports = { fileQueue };