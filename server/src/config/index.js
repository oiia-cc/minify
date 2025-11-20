
const loadEnv = require("./loadEnv");
loadEnv();

module.exports = {
    app: {
        env: process.env.NODE_ENV || "development",
        port: process.env.APP_PORT || 3333,
        jwtSecret: process.env.JWT_SECRET,
        jwtLifetime: process.env.JWT_LIFETIME
    },
    db: {
        url: process.env.DATABASE_URL
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIST_PASSWORD,

        upstashUrl: process.env.REDIS_URL,
        upstashHost: process.env.UPSTASH_REDIS_HOST,
        upstashPassword: process.env.UPSTASH_REDIS_PASSWORD,
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        serviceKey: process.env.SUPABASE_SERVICE_KEY
    }
}