const path = require("path");
const dotenv = require('dotenv');

 const PROJECT_ROOT = path.resolve(process.cwd());

const loadEnv = () => {
    const env = process.env.NODE_ENV || 'development';

    const envFile = `.env.${env}`;

    // const envPath = path.join(PROJECT_ROOT, envFile);

    const envPath = path.resolve(PROJECT_ROOT, envFile);

    console.log("dirn-: ", PROJECT_ROOT);

    dotenv.config({ path: envPath })
    console.log(`load ENV: ${envFile}`);
}

module.exports = loadEnv;