const { redisSub } = require('../config/redisClient');

let clients = new Set();

function addClient(res) {
    clients.add(res);
}

function removeClient(res) {
    clients.delete(res);
}

redisSub.subscribe("fileUpdate");

redisSub.on("message", (_, msg) => {
    console.log("RAW MESSAGE FROM REDIS:", msg);
    let event;
    try {
        event = JSON.parse(msg);
    } catch {
        return;
    }

    const data = `event: fileUpdate\ndata: ${JSON.stringify(event)}\n\n`;

    for (const res of clients) {
        res.write(data);
    }
});

// Heartbeat để giữ kết nối
setInterval(() => {
    for (const res of clients) {
        res.write(`:keepalive\n\n`);
    }
}, 15000);


module.exports = {
    addClient,
    removeClient
};