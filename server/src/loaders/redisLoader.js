const Redis = require("ioredis");

const redisConfig = require('../config/redis');

const createRedisClient = () => {
    if (redisConfig.isUpstash) {
        return new Redis({
            host: redisConfig.host,
            password: redisConfig.password,
            port: redisConfig.port,
            tls: {}
        })
    }
    return new Redis({
        host: redisConfig.host,
        port: redisConfig.port,
        password: redisConfig.password
    })
}

module.exports = createRedisClient();