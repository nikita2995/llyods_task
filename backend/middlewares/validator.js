
/** ********************** Require Node modules ********************* */
const JOI = require('joi');
const Boom = require('boom');

/** ********************** Require Local modules ********************* */
const { logger } = require('../utils');

const schema = {

  '/company': {
    "POST": {
      body: JOI.object().keys({
        firstName: JOI.string().required(),
        lastName: JOI.string().required(),
        companyName: JOI.string().required(),
        email: JOI.string().email().required(),
        licenseStartDate: JOI.date().required(),
        licenseEndDate: JOI.date().required()
      }),
      params: null
    }
  },
  '/company/:companyName/status': {
    "GET": {
      body: null,
      params: JOI.object().keys({
        companyName: JOI.string().required()
      })
    }
  },
  '/company/:companyName': {
    "GET": {
      body: null,
      params: JOI.object().keys({
        companyName: JOI.string().required()
      })
    }
  },
  '/admin/company/:companyName': {
    "GET": {
      body: null,
      params: JOI.object().keys({
        companyName: JOI.string().required()
      })
    }
  },
  '/admin/company': {
    "GET": {
      body: null,
      params: null
    },
    "PUT": {
      body: JOI.object().keys({
        firstName: JOI.string().optional(),
        lastName: JOI.string().optional(),
        companyName: JOI.string().required(),
        email: JOI.string().email().optional(),
        licenseStartDate: JOI.date().optional(),
        licenseEndDate: JOI.date().optional(),
        licenseStatus: JOI.string().optional(),
      }),
      params: null
    }
  }

};

module.exports = async (req, res, next) => {
  try {
    if (schema[req.route.path][req.method].body) {
      // Body validation
      await JOI.validate(req.body, schema[req.route.path][req.method].body);
    }
    if (schema[req.route.path][req.method].params) {
      // Param validation
      await JOI.validate(req.params, schema[req.route.path][req.method].params);
    }
    next();
  } catch (err) {
    logger.error('Error in API validation', err.details[0].message);
    next(Boom.badData(err.details[0].message));
  }
};
