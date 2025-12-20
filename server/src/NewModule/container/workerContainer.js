const { Worker } = require('bullmq');
const { createRedis } = require('../infra/config/redisClient');

module.exports = {
  Worker,
  createRedis,
};
