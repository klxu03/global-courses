const userRoutes = require('./users');
const eventRoutes = require('./events');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the developmental api-server');
  });

  userRoutes(app, fs);
  eventRoutes(app, fs);
};

module.exports = appRouter;
