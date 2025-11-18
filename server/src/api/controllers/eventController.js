const { addClient, removeClient } = require('../../events/eventBus');

module.exports = streamEvents = (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders();
    res.write("retry: 5000\n\n");

    addClient(res);

    req.on("close", () => {
        removeClient(res);
        res.end();
    });
}