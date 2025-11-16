const { Queue } = require('bullmq');

const connection = {
    host: process.env.UPSTASH_REDIS_HOST,
    port: 6379,
    /* 
    password: process.env.UPSTASH_REDIS_PASSWORD,
     tls: {}
     
     */
};

const fileQueue = new Queue('fileQueue', {
    connection, defaultJobOptions: {
        attempts: 2,
        backoff: {
            type: 'exponential',
            daley: 5000
        }, removeOnComplete: true,
        removeOnFail: false
    }
})

module.exports = { fileQueue, connection };