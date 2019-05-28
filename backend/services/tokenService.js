
/* ********************************* Import Node Modules ********************************* */


/* ********************************* Import Local Modules ********************************* */
const Tokens = require('../models/Tokens');

module.exports = {

  findToken: async (data) => {
    const result = await Tokens.findOne({ tickerInitial: data });
    return result;
  },

  createToken: async (data) => {
    const token = new Tokens(data);
    const result = await token.save();
    return result;
  },

  updateToken: async (data) => {
    let result = await Tokens.update({ tickerInitial: data.tickerInitial }, { ...data });
    return result;
  }

};
