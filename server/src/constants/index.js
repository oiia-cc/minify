const FileStatus = {
    UPLOADED: "uploaded",
    QUEUED: "queued",
    PROCESSING: "processing",
    VIRUS_FAILED: "virus_failed",
    DUPLICATE: "duplicate",
    FAILED: "failed",
    COMPLETED: "completed"
};

const PipelineStep = {
    VIRUS_SCAN: "VIRUS_SCAN",
    OPTIMIZE: "OPTIMIZE",
    FINALIZE: "FINALIZE",
};

const ProgressMap = {
    [PipelineStep.VIRUS_SCAN]: 20,
    [PipelineStep.OPTIMIZE]: 60,
    [PipelineStep.FINALIZE]: 100,
};

const Pipelines = {
    FILE_PROCESS_JOB: [
        PipelineStep.VIRUS_SCAN,
        PipelineStep.FINALIZE
    ],

    UPDATE_VERSION_JOB: [
        PipelineStep.VIRUS_SCAN,
        PipelineStep.FINALIZE
    ]
};

const JOB_DB_STATUS = {
    QUEUED: "queued",
    IN_PROGRESS: "in_progress",
    SUCCEEDED: "succeeded",
    FAILED: "failed",
    DEAD_LETTER: "dead_letter"
}

module.exports = {
    FileStatus,
    PipelineStep,
    ProgressMap,
    Pipelines,
    FILE_QUEUE_NAME: "fileQueue",
    FILE_UPDATE: "fileUpdate",
    JOB_DB_STATUS,
    JOB_BULLMQ_STATUS: {
        COMPLETED: "completed",
        FAILED: "failed"
    }
}