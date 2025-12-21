const logger = require("../../utils/logger");

module.exports = (err, req, res, next) => {
  logger.error("ERROR: ", err);
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({
      success: false,
      message: `File oversize! Limit is 4 MB`,
    });
  }
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error!",
  });
};
