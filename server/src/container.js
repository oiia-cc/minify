// container.js
const { queueConfig } = require('./queue/queueConfig');

const fileService = require('./services/file/fileService');
const virusService = require('./services/virus/scanner');
const auditLogService = require('./services/auditLog/auditLogService');
const jobService = require('./services/job/jobService');
const notificationService = require('./services/notification/notificationService');
const storageService = require('./services/storage/storageService');
const userService = require('./services/user/userService');
const versionService = require('./services/version/versionService');
const fileUploadAppService = require('./services/fileUploadApp');

const { info, errorLog } = require('./utils/logger');
const prisma = require('./database');
const { hash } = require('./utils/hashUtil');
const { FileStatus } = require('./constants');
const { addFileJob } = require('./queue/producers/fileProducers');
const { fileQueue } = require('./queue/queueConfig');
const { createRedis, createRedisSub } = require('./config/redisClient');
const { publishEvent } = require('./events/eventPublisher');


function createContainer() {
    return {
        createRedis,
        createRedisSub,
        queueConfig,
        FileStatus,
        auditLogService,
        fileService,
        jobService,
        notificationService,
        storageService,
        userService,
        versionService,
        virusService,
        fileUploadAppService,
        prisma,
        fileQueue,
        addFileJob,
        publishEvent,
        hash,
        info,
        errorLog,
    };
}

module.exports = { createContainer };
