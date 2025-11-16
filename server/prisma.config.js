require("dotenv").config({
    path: require('path').resolve(__dirname, '.env.dev'),
});

module.exports = {
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: process.env.DATABASE_URL,
    },
};
