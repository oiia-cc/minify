const Redis = require('ioredis');
const redisSub = new Redis();

let clients = [];

const addClient = (res) => {
    clients.push(res);
}

const removeClient = (res) => {
    clients = clients.filter(c => c !== res);
}

redisSub.subscribe("file-events");

redisSub.on("message", (_, message) => {
    let event = null;
    try {
        event = JSON.parse(message);
    } catch {
        return;
    }

    const data = `data: ${JSON.stringify(event)}\n\n`;

    clients.forEach(res => res.write(data));
})


module.exports = {
    addClient,
    removeClient
};