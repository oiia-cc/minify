
const { Pipelines, JOB_DB_STATUS } = require('../../constants');

const { info } = require('../../utils/logger');
const { publishEvent } = require('../../events/eventPublisher');
const jobService = require('../../services/job/jobService');
const auditLogService = require('../../services/auditLog/auditLogService');
const notificationService = require('../../services/notification/notificationService');
const { runPipelineHelper } = require('./helpers/runPipeline.hepler');
const { handleSucceededHelper } = require('./helpers/handleSucceeded.helper');
const handleError = require('./helpers/handleError');

const runPipeline = async (context) => {
    const ctx = { ...context };
    info("ctxaed", context.job.name);

    ctx.jobUuid = context.job.opts.jobUuid;
    ctx.attempt = context.job.attemptsMade + 1;
    ctx.maxAttempts = context.job.opts.attempts;
    ctx.pipeline = ctx.Pipelines[context.job.name];

    info(`context ${ctx.jobUuid} attempt ${ctx.attempt}/${ctx.maxAttempts}`);
    info(">>>pline:", ctx.pipeline);

    await ctx.jobService.updateOne(ctx.jobUuid, {
        status: ctx.JOB_DB_STATUS.IN_PROGRESS,
        attempts: ctx.attempt
    });

    try {
        // await runPipelineHelper(pipeline, context, jobUuid);
        await runPipelineHelper(ctx);
        await handleSucceededHelper(ctx);

    } catch (err) {
        info(">>>step-fail:", err);

        await handleError(context, err);
    }
}

module.exports = {
    runPipeline
}
