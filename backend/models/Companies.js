"use strict";

// NPM Module
const mongoose = require('mongoose');

// Internal Modules

const DB = require('../dbConnection');

var companySchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    companyName: { type: String },
    licenseStartDate: { type: Date },
    licenseEndDate: { type: Date },
    licenseStatus: { type: String, enum: ['Inactive', 'Active', 'Deactive'], defualt: 'Inactive' },
    createdAt: { type: Number }
});

module.exports = DB.model('companies', companySchema); 