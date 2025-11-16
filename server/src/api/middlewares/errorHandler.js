const logger = require('../../utils/logger');


module.exports = (err, req, res, next) => {
    logger.error("ERROR: ", err);

    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error!"
    })
}
