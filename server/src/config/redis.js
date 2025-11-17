const config = require('./index');

const buildRedisConfig = () => {
    const env = config.app.env;

    if (env === 'production') {
        return {
            host: config.redis.upstashHost,
            password: config.redis.upstashPassword,
            port: config.redis.port,
            isUpstash: true
        }
    }
    return {
        host: config.redis.host,
        password: config.redis.password,
        port: config.redis.port,
        isUpstash: false
    }
}

module.exports = buildRedisConfig;