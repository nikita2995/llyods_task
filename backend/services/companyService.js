/* ********************************* Import Local Modules ********************************* */
const Companies = require('../models/Companies');

module.exports = {

  fetch: async (data) => {
    const result = await Companies.findOne({ companyName: data });
    return result;
  },

  fetchAll: async () => {
    const result = await Companies.find({});
    return result;
  },

  register: async (data) => {
    data.license.status = "Inactive";
    const company = new Companies(data);
    const result = await company.save();
    return result;
  },

  // changeNonce: async (data) => {
  //   let nonce = Math.floor(Math.random() * 10000);
  //   let result = await Users.updateOne({ publicAddress: data }, { nonce });
  //   return result;
  // },

  // submitKyc: async (data) => {
  //   const result = await Users.updateOne({ publicAddress: data.publicAddress }, { kyc: data });
  //   return result;
  // },

  // updateKYC: async (data) => {
  //   let kycData = await Users.findOne({ publicAddress: data.publicAddress });
  //   kycData.kyc.orgDocLocation = data.orgDocLocation;
  //   kycData.kyc.addressDocLocation = data.addressDocLocation;
  //   kycData.kyc.orgId = data.orgId;
  //   kycData.kyc.completed = true;
  //   let result = await Users.updateOne({ publicAddress: data.publicAddress }, {
  //     kyc: kycData.kyc
  //   });
  //   return result;
  // },

  // fetchKyc: async (data) => {
  //   const result = await Users.findOne({ publicAddress: data }, { kyc: true });
  //   return result;
  // },

  // fetchKycDoc: async (data) => {
  //   const result = await Users.findOne({ publicAddress: data.publicAddress }, { kyc: true });
  //   return result.kyc[data.docType];
  // },

};
