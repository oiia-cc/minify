const crypto = require('crypto');

const hash = async (buffer) => {
    return crypto.createHash("sha256").update(buffer).digest("hex");
}

module.exports = {
    hash
}