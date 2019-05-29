/* ********************************* Import Local Modules ********************************* */
const { adminController, companyController } = require('./controllers');
const { validator } = require('./middlewares');

module.exports = (app) => {

  /** APIs FOR COMPANY **/
  app.post('/company', validator, companyController.register);

  app.get('/company/:companyName/status', validator, companyController.fetchStatus);

  app.get('/company/:companyName', validator, companyController.fetch);

  /** APIs FOR ADMIN */
  app.get('/admin/company/:companyName', validator, adminController.fetch);

  app.get('/admin/company', validator, adminController.fetchAll);

  app.put('/admin/company', validator, adminController.updateDetails);

};
