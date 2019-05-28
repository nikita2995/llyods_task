
const Boom = require('boom');
const ethUtil = require('ethereumjs-util');
const sigUtil = require('eth-sig-util');

/* ********************************* Import Local Modules ********************************* */
const { logger } = require('../utils');
const { authService, userService } = require('../services');
const { authentication } = require('../helpers');

module.exports = {
  createAuth: async (req, res, next) => {
    try {
      logger.info('Auth Request: ', req.body.email);
      const { signature, publicAddress } = req.body;

      const userResult = await userService.findUser(publicAddress);
      if (userResult) {

        const msg = `I am signing my one-time nonce: ${userResult.nonce}`;
        const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, 'utf8'));
        const address = sigUtil.recoverPersonalSignature({ data: msgBufferHex, sig: signature })
        if (address.toLowerCase() === publicAddress.toLowerCase()) {
          const updateNonce = await userService.changeNonce(publicAddress);

          authTokenData = {
            id: userResult._id,
            publicAddress: publicAddress
          }
          const token = await authentication.createToken(authTokenData);
          res.data = {
            accessToken: token
          };
          next();
        }
        else {
          next(Boom.unauthorized('Signature verification failed'));
        }
      } else {
        next(Boom.notFound('User does not exists'));
      }
    } catch (err) {
      logger.error(err);
      next(Boom.conflict('Something went wrong'));
    }
  },


};