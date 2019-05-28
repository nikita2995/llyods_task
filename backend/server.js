
/** ********************** Require Node modules ********************* */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors')

/** ********************** Require Local modules ********************* */
const routers = require('./routes');
const { logger } = require('./utils');
const swaggerDocument = require('./swagger.json');
const { errorHandler, responseHandler } = require('./middlewares');

/** ********************** Varaiable Listing ********************* */
const app = express();
const router = express.Router();
const { port } = config.get('General');
const env = process.env.NODE_ENV || 'development';


// Router Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', router);

routers(router);

// Swagger configuration
if (env === 'development') {
  const options = {
    explorer: true,
  };

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  logger.info('Swagger running on http://localhost:5000/api-docs');
}

app.use(responseHandler);
app.use(errorHandler);

// Server Start
app.listen(port, (error) => {
  if (error) logger.error('Error while Application startup', error);
  else logger.info(`Application connected to ${env} environment at ${port} port`);
});
