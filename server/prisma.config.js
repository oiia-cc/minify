const configDb = require("./src/config/index");

module.exports = {
    schema: "./src/database/schema.prisma",
    migrations: {
        path: "./src/database/migrations",
    },
    engine: "classic",
    datasource: {
        url: configDb.db.url,
    },
};
