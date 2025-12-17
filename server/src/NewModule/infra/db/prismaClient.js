const { PrismaClient } = require('./prisma');
const config = require("../config/index");

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: config.db.url
        }
    }
})

module.exports = prisma;
