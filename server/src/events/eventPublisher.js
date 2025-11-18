const { redisPub } = require('../config/redisClient');

const publishEvent = async (channel, data) => {
    return redisPub.publish(channel, JSON.stringify(data));
}

module.exports = { publishEvent };