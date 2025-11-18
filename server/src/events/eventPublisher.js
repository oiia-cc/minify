const { createRedis } = require('../config/redisClient');

const publishEvent = async (channel, data) => {
    return createRedis().publish(channel, JSON.stringify(data));
}

module.exports = { publishEvent };