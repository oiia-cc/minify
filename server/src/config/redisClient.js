
// const buildRedisConfig = () => {

const Redis = require("ioredis");
const config = require('./index');

let redis = null;
let redisSub = null;

const isUpstash = Boolean(config.redis.upstashUrl);

const baseConfig = isUpstash
    ? config.redis.upstashUrl
    : {
        host: config.redis.host,
        password: config.redis.password,
        port: config.redis.port,
    }

const createRedis = () => {
    if (!redis) {
        redis = new Redis(baseConfig, { maxRetriesPerRequest: null });
    }
    return redis;
}

const createRedisSub = () => {
    if (!redisSub) {
        redisSub = redis.duplicate();
    }
    return redisSub;
}

module.exports = { createRedis, createRedisSub };
