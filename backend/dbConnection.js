
/** ********************** Require node modules ************************ */
const mongoose = require('mongoose');


/** Database Connection */
module.exports = mongoose.createConnection('mongodb://127.0.0.1:27017/llyodsDB',
  { useNewUrlParser: true }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info('Database Connection established');
    }
  });
