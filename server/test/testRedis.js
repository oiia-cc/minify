const { createClient } = require('redis');

const main = async () => {
    const client = createClient({ url: "redis://127.0.0.1:6379" })
    client.on('error', err => console.log("err, ", err))
    client.on('connect', () => console.log("ok"))
    await client.connect();
    const pong = await client.ping();
    console.log("result ping: ", pong);

};
main();