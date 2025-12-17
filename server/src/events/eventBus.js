const { FILE_UPDATE } = require('../constants');
const { errorLog, info } = require('../utils/logger');
const sub = require('./eventSubscriber');

let clients = new Set();

function addClient(res) {
    clients.add(res);
}

function removeClient(res) {
    clients.delete(res);
}

sub.on(FILE_UPDATE, (event) => {
    try {
        const data = `event: fileUpdate\ndata: ${JSON.stringify(event)}\n\n`;

        for (const res of clients) {
            res.write(data);
        }
    } catch (e) {
        errorLog(e);
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