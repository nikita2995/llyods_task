const Boom = require('boom');

/* ********************************* Import Local Modules ********************************* */
const { logger } = require('../utils');
const { companyService } = require('../services');

module.exports = {
  fetch: async (req, res, next) => {
    try {
      logger.info('Fetch company Details for admin Request', req.params);

      const companyResult = await companyService.fetch(req.params.companyName);
      if (!companyResult) {
        next(Boom.conflict('Company does not exists'));
      } else {
        res.data = companyResult;
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  fetchAll: async (req, res, next) => {
    try {
      logger.info('Fetch company all for admin Request', req.params);

      const companyResult = await companyService.fetchAll();
      if (!companyResult) {
        next(Boom.conflict('Company does not exists'));
      } else {
        res.data = { companyName: companyResult };
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  updateDetails: async (req, res, next) => {
    try {
      logger.info('Update company details by admin Request', req.body);

      const companyResult = await companyService.updateDetails(req.body);
      if (!companyResult) {
        next(Boom.conflict('Company does not exists'));
      } else {
        res.data = "updated";
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },
};