const configDb = require("./src/config/index");

module.exports = {
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: configDb.db.url,
    },
};
