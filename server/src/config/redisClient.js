
// const buildRedisConfig = () => {

const Redis = require("ioredis");
const config = require('./index');

let redis = null;
let redisPub = null;
let redisSub = null;

function createRedis() {
    if (redis) return { redis, redisPub, redisSub };

    const isUpstash = Boolean(config.redis.upstashUrl);

    const baseConfig = isUpstash
        ? config.redis.upstashUrl
        : {
            host: config.redis.host,
            password: config.redis.password,
            port: config.redis.port,

        }

    // MAIN client
    redis = new Redis(baseConfig, { maxRetriesPerRequest: null });

    // PUB/SUB (phải duplicate)
    redisPub = redis.duplicate();
    redisSub = redis.duplicate();

    return { redis, redisPub, redisSub };
}

module.exports = createRedis();
