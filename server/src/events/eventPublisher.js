const { createRedis } = require('../config/redisClient');
const pub = createRedis();

const publishEvent = async (channel, data) => {
    return pub.publish(channel, JSON.stringify(data));
}

module.exports = { publishEvent };