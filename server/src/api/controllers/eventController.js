const { addClient, removeClient } = require('../../services/eventBus');

module.exports = streamEvents = (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders();

    addClient(res);

    req.on("close", () => {
        removeClient(res);
        res.end();
    });
}