const loadRoutesAndMiddles = require('./infra/http/loadRoutes');
const createExpressApp = require('./infra/http/expressApp');

const configApp = require('./infra/config');
// const { createContainer} = require('awilix');

const port = configApp.app.port;

const bootstrap = async () => {
  // const container = createContainer();
  const app = await createExpressApp();

  // loadroute
  await loadRoutesAndMiddles(app);

  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`>>>App is listening on port ${port}`);
      resolve();
    });
  });
};

module.exports = bootstrap;
