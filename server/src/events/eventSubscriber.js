const EventEmitter = require('events');
const { createRedisSub } = require('../config/redisClient');
const { FILE_UPDATE } = require('../constants');
const { info } = require('../utils/logger');

const emitter = new EventEmitter();

const sub = createRedisSub();

sub.subscribe(FILE_UPDATE);

sub.on("message", (_, msg) => {
    console.log("RAW MESSAGE FROM REDIS:", msg);
    try {
        const event = JSON.parse(msg);
        emitter.emit(FILE_UPDATE, event);
    } catch (_) { }
});

module.exports = emitter;