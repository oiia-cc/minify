const EventEmitter = require('events');
const { createRedisSub } = require('../config/redisClient');
const { eventName } = require('../constants');

const emitter = new EventEmitter();
const sub = createRedisSub();

sub.subscribe(eventName.FILE_UPDATE);

sub.on("message", (_, msg) => {
    console.log("RAW MESSAGE FROM REDIS:", msg);
    try {
        const event = JSON.parse(msg);
        emitter.emit(eventName.FILE_UPDATE, event);
    } catch (_) { }
});

module.exports = emitter;