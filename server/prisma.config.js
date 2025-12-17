const configDb = require("./src/config/index");
const path = require("path");
const dotenv = require('dotenv');
// const PROJECT_ROOT = path.resolve(process.cwd());

// const basePath = path.join(PROJECT_ROOT, "")
// ;
const schemaPath =

module.exports = {
    schema: "./src/NewModule/infra/db/schema.prisma",
    migrations: {
        path: "./src/NewModule/infra/db/migrations",
    },
    engine: "classic",
    datasource: {
        url: configDb.db.url,
    },
};
