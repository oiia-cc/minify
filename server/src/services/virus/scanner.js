const CloudmersiveVirusApiClient = require("cloudmersive-virus-api-client");
const { cloudmersive } = require("../../config");
const defaultClient = CloudmersiveVirusApiClient.ApiClient.instance;

defaultClient.authentications["Apikey"].apiKey = cloudmersive.apiKeyAuth

const api = new CloudmersiveVirusApiClient.ScanApi();

async function scanBuffer(buffer) {

    return new Promise((resolve, reject) => {
        const opts = { inputFile: buffer };
        // console.log(">>> api:", api.scanFile);

        api.scanFile(opts, (err, data) => {
            // console.log(">>> opts:", opts);

            if (err) return reject(err);

            resolve({
                infected: data.FoundViruses && data.FoundViruses.length > 0,
                result: data.FoundViruses
            })
        })
    })
}

module.exports = { scanBuffer };
