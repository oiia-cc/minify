const handleSucceded = async (ctx, container, jobUuid) => {
  await container.auditLogService.createOne({
    actorType: 'system',
    action: 'system.addJob.succeeded',
    details: {
      jobUuid,
    },
  });

  await container.auditLogService.createOne({
    actorType: 'system',
    action: 'system.addJob.succeeded',
    details: {
      jobUuid,
      versionId: ctx.versionId,
    },
  });
};

module.exports = handleSucceded;
