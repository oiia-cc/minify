const { FileQueue } = require('../../queue/queueConfig');
const { createRedis } = require('../infra/config/redisClient');
const { Queue } = require('bullmq');

const fileQueue = new FileQueue(createRedis, Queue);

module.exports = { fileQueue };
