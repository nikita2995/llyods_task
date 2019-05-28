
/** ********************** Require Node modules ********************* */
const JOI = require('joi');
const Boom = require('boom');

/** ********************** Require Local modules ********************* */
const { logger } = require('../utils');

const schema = {
  '/users': {
    body: JOI.object().keys({
      publicAddress: JOI.string().required()
    }),
    params: null,
    query: JOI.object().keys({
      publicAddress: JOI.string().required()
    })
  },
  '/kyc': {
    body: JOI.object().keys({
      firstName: JOI.string().required(),
      lastName: JOI.string().required(),
      email: JOI.string().email().required(),
      phoneNumber: JOI.number(),
      companyName: JOI.string().required(),
      companyWebsite: JOI.string(),
      message: JOI.string()
    }),
    query: null
  },
  '/auth': {
    body: JOI.object().keys({
      signature: JOI.string().required(),
      publicAddress: JOI.string().required(),
    }),
    params: null,
  },
  '/token': {
    body: JOI.object().keys({
      tickerInitial: JOI.string().required(),
      tokenName: JOI.string().required(),
    })
  }

};

module.exports = async (req, res, next) => {
  try {
    if (schema[req.route.path].body) {
      // Body validation
      await JOI.validate(req.body, schema[req.route.path].body);
    }
    if (schema[req.route.path].query) {
      // Param validation
      await JOI.validate(req.query, schema[req.route.path].query);
    }
    next();
  } catch (err) {
    logger.error('Error in API validation', err.details[0].message);
    next(Boom.badData(err.details[0].message));
  }
};
