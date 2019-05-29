/* ********************************* Import Local Modules ********************************* */
const Companies = require('../models/Companies');

module.exports = {

  fetch: async (data) => {
    const result = await Companies.findOne({ companyName: data });
    return result;
  },

  fetchAll: async () => {
    const result = await Companies.find({}, { companyName: true });
    let companyName = result.map(value => value.companyName);
    return companyName;
  },

  register: async (data) => {
    data.licenseStatus = "Inactive";
    const company = new Companies(data);
    const result = await company.save();
    return result;
  },

  updateDetails: async (data) => {
    let result = await Companies.updateOne({ companyName: data.companyName }, data);
    return result;
  },

};
