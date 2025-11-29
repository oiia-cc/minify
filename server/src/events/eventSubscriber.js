const EventEmitter = require('events');
const { createRedisSub } = require('../config/redisClient');

const emitter = new EventEmitter();
const sub = createRedisSub();

sub.subscribe("fileUpdate");

sub.on("message", (_, msg) => {
    console.log("RAW MESSAGE FROM REDIS:", msg);
    try {
        const event = JSON.parse(msg);
        emitter.emit("fileUpdate", event);
    } catch (_) { }
});

module.exports = emitter;