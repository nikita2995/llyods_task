/* ********************************* Import Local Modules ********************************* */
const { companyController } = require('./controllers');

module.exports = (app) => {

  /** APIs FOR COMPANY CREATION **/
  app.post('/company', companyController.register);

  app.get('/company/:companyName', companyController.fetch);

  // app.get('/company', companyController.fetchAll);

  // /** APIs FOR KYC SUBMISSION */
  // app.get('/kyc', userController.fetchKyc);

  // app.get('/kyc/:publicAddress/doc/:docType', userController.fetchKycDoc);

  // app.post('/kyc', userController.submitKyc);

  // app.post('/kyc/doc', upload.any(), userController.kycDocUpload);

  // /** APIs FOR TOKEN **/
  // app.get('/token', tokenController.fetchToken);

  // app.post('/token', tokenController.createToken);

  // app.put('/token', tokenController.updateToken);


  // app.post('/auth', authController.createAuth);
};
