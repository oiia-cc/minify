const { PrismaClient } = require('./prisma');
const config = require("../config/index");

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: config.db.url
        }
    }
})
// console.log(">>> p.ver:", prisma.fileVersion);


module.exports = prisma;
