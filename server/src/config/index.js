
const loadEnv = require("./loadEnv");
loadEnv();

module.exports = {
    app: {
        env: process.env.NODE_ENV || "development",
        port: process.env.PORT || 3333
    },
    db: {
        url: process.env.DATABASE_URL
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIST_PASSWORD,

        upstashHost: process.env.UPSTASH_REDIS_HOST,
        upstashPassword: process.env.UPSTASH_REDIS_PASSWORD,
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        serviceKey: process.env.SUPABASE_SERVICE_KEY
    }
}