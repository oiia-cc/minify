const Pipelines = {
    PROCESS_FILE: ["virusScan", "optimize", "updateFinal"],
    UPDATE_VERSION: ["virus", "dupcheck", "optimize", "moveToFinal"],
}

module.exports = Pipelines;