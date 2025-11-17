const path = require("path");
const dotenv = require('dotenv');


const loadEnv = () => {
    const env = process.env.NODE_ENV || 'development';

    const envFile = `.env.${env}`;
    const envPath = path.resolve(__dirname, `../../${envFile}`);

    dotenv.config({ path: envPath })
    console.log(`load ENV: ${envFile}`);
}

module.exports = loadEnv;