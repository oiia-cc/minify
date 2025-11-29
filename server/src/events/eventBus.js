const sub = require('./eventSubscriber');
let clients = new Set();

function addClient(res) {
    clients.add(res);
}

function removeClient(res) {
    clients.delete(res);
}

sub.on("fileUpdate", (event) => {

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
}, 4000);


module.exports = {
    addClient,
    removeClient
};