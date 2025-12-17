
const { Pipelines, JOB_DB_STATUS } = require('../../constants');

const { info } = require('../../utils/logger');
const { publishEvent } = require('../../events/eventPublisher');
const jobService = require('../../services/job/jobService');
const auditLogService = require('../../services/auditLog/auditLogService');
const notificationService = require('../../services/notification/notificationService');
const { runPipelineHelper } = require('./helpers/runPipeline.hepler');
const { handleSucceededHelper } = require('./helpers/handleSucceeded.helper');
const handleError = require('./helpers/handleError');

const runPipeline = async (context, container) => {

    // const ctx = { ...context };
    // info("ctxaed", context.ops.);

    const { info } = container;
    const jobUuid = context.opts.jobUuid;

    info("jobid", jobUuid);
    const attempt = context.attemptsMade + 1;
    const maxAttempts = context.opts.attempts;
    const pipeline = Pipelines[context.jobName];

    info(">>>pline:", pipeline);

    // info(`context ${jobUuid} attempt ${attempt}/${maxAttempts}`);
    // info(">>>pline:", pipeline);

    const result = await container.jobService.updateOne(jobUuid, {
        status: container.JOB_DB_STATUS.IN_PROGRESS,
        attempts: attempt
    });

    info("fffffi", result);

    try {
        await runPipelineHelper(context, container, pipeline);
        await handleSucceededHelper(context, container);

    } catch (err) {
        info(">>>step-fail:", err);

        await handleError({
            context,
            container,
            err
        });
    }
}

module.exports = {
    runPipeline
}
