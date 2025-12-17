// container.js

const fileService = require('../../services/file/fileService');
const virusService = require('../../services/virus/scanner');
const auditLogService = require('../../services/auditLog/auditLogService');
const jobService = require('../../services/job/jobService');
const notificationService = require('../../services/notification/notificationService');
const storageService = require('../../services/storage/storageService');
const userService = require('../../services/user/userService');
const versionService = require('../../services/version/versionService');
const fileUploadAppService = require('../../services/fileUploadApp');

const { info, errorLog } = require('../../utils/logger');
const prisma = require('../../database');
const { hash } = require('../../utils/hashUtil');
const { FileStatus, ProgressMap, JOB_BULLMQ_STATUS,
    FILE_QUEUE_NAME, JOB_DB_STATUS, Pipelines } = require('../../constants');
const { addFileJob } = require('../../queue/producers/fileProducers');
const { fileQueue } = require('../../queue/queueConfig');
const { createRedis, createRedisSub } = require('../../config/redisClient');
const { publishEvent } = require('../../events/eventPublisher');
const { FILE_PROCESS_JOB } = require('../../constants/jobNames');

const  { createContainer, asClass, asFunction, asValue } = require ("awilix");

let container = null;

function getContainer() {

    if (!container) {
    //     container = createContainer();

    //     container.register ({
    // createRedis: asFunction(createRedis).singleton(),
    // createRedisSub: asFunction(createRedisSub).singleton(),
    // queueConfig: asFunction(fileQueue).singleton(),
    container = {
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

            FileStatus,
            ProgressMap,
            JOB_BULLMQ_STATUS,
            FILE_QUEUE_NAME,
            FILE_PROCESS_JOB,
            JOB_DB_STATUS,

            addFileJob,
            publishEvent,
            hash,
            info,
            errorLog,
        }

    // );
};
   return container;
};

module.exports = getContainer ;
