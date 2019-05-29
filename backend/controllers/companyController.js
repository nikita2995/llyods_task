
const Boom = require('boom');
const fs = require('fs');

/* ********************************* Import Local Modules ********************************* */
const { logger } = require('../utils');
const { companyService } = require('../services');

module.exports = {

  fetch: async (req, res, next) => {
    try {
      logger.info('Fetch company Request', req.params);

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

  fetchStatus: async (req, res, next) => {
    try {
      logger.info('Check company status Request', req.params);

      const companyResult = await companyService.fetch(req.params.companyName);
      if (!companyResult) {
        next(Boom.conflict('Company does not exists'));
      } else {
        let success = companyResult.licenseStatus == 'Active' ? true : false;
        res.data = { success };
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  register: async (req, res, next) => {
    try {
      logger.info('Register Company Request', req.body);

      const companyResult = await companyService.fetch(req.body.companyName);
      if (companyResult) {
        next(Boom.conflict('Company already exist'));
      }
      else {

        const companyResult = await companyService.register(req.body);

        if (!companyResult) {
          next(Boom.forbidden('Error while adding company'));
        }

        res.data = companyResult;
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  submitKyc: async (req, res, next) => {
    try {
      logger.info('kycSubmit Request', req.body);
      const kycResult = await userService.submitKyc(req.body);

      if (!kycResult) {
        next(Boom.forbidden('User does not exists'));
      }

      if (!kycResult.nModified) {
        next(Boom.forbidden('User does not exists'));
      } else {
        res.message = { message: 'Kyc added' };
        next();
      }

    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  kycDocUpload: async (req, res, next) => {
    try {
      logger.info('KYC Doc Upload Request', req.body);
      const kycResult = await userService.updateKYC(req.body);

      if (!kycResult) {
        next(Boom.forbidden('User does not exists'));
      }

      if (!kycResult.nModified) {
        next(Boom.forbidden('User does not exists'));
      } else {
        res.message = { message: 'Doc added' };
        next();
      }

    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  fetchKyc: async (req, res, next) => {
    try {
      logger.info('fetchKyc Request', req.query);
      const kycResult = await userService.fetchKyc(req.query.publicAddress);

      if (!kycResult || !kycResult.kyc) {
        return next(Boom.forbidden('User Kyc does not exists'));
      }

      res.data = kycResult.kyc;
      return next();
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  fetchKycDoc: async (req, res, next) => {
    try {
      logger.info('fetchKycDoc Request', req.params);
      const kycResult = await userService.fetchKycDoc(req.params);

      if (!kycResult || !kycResult) {
        return next(Boom.forbidden('User Kyc does not exists'));
      }

      fs.readFile(`${__dirname}/../uploads/${kycResult}`, (err, data) => {
        if (err) {
          return next(Boom.conflict('Error while getting document'));
        }

        res.setHeader('Content-Length', data.length);
        res.write(data);
        res.end();
      });
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

};
