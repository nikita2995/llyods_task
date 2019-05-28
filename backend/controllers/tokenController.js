
const Boom = require('boom');

/* ********************************* Import Local Modules ********************************* */
const { logger } = require('../utils');
const { tokenService } = require('../services');
const { userService } = require('../services');

module.exports = {

  createToken: async (req, res, next) => {
    try {
      logger.info('Create Token Request', req.body);

      const userData = await userService.findUser(req.body.tickerOwner);
      const tokenResult = await tokenService.findToken(req.body.tickerInitial);
      if (tokenResult) {
        next(Boom.conflict('Token Name already reserved'));
      }
      else {

        const tokenResult = await tokenService.createToken({ ...req.body, userId: userData._id.toString() });

        if (!tokenResult) {
          next(Boom.forbidden('Token does not exists'));
        }

        res.data = tokenResult;
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  fetchToken: async (req, res, next) => {
    try {
      logger.info('fetchToken Request', req.query.tickerInitial);

      const tokenResult = await tokenService.findToken(req.query.tickerInitial);

      if (!tokenResult) {
        next(Boom.conflict('Token does not exists'));
      } else {
        res.data = tokenResult;
        next();
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

  updateToken: async (req, res, next) => {
    try {
      logger.info('updateToken Request', req.body);

      const tokenResult = await tokenService.findToken(req.body.tickerInitial);
      if (!tokenResult) {
        next(Boom.forbidden('Token does not exists'));
      } else {
        const queryRes = await tokenService.updateToken(req.body);

        if (!queryRes.nModified) {
          next(Boom.forbidden('Token does not exists'));
        } else {
          res.message = { message: 'Token updated' };
          next();
        }
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },

};
