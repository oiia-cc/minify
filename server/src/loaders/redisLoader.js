const Redis = require("ioredis");

const redisConfig = require('../config/redis');

const createRedisClient = () => {
    const connection = {
        host: redisConfig.host,
        port: redisConfig.port,
        password: redisConfig.password
    }

    if (redisConfig.isUpstash) {
        connection.tls = {}
    }

    const redis = new Redis(connection)
    return redis;
}

module.exports = createRedisClient();