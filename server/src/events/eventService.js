const Redis = require("ioredis");
const redis = new Redis();


const publishEvent = async (channel, data) => {
    return redis.publish(channel, JSON.stringify(data));
}

module.exports = { publishEvent };