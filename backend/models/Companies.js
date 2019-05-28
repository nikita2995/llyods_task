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
    license: {
        startDate: { type: Date },
        endDate: { type: Date },
        status: { type: String, enum: ['Inactive', 'Active', 'Deactive'], defualt: 'Inactive' }
    },
    createdAt: { type: Number }
});

module.exports = DB.model('companies', companySchema); 