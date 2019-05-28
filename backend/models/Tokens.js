
"use strict";

// NPM Module
const mongoose = require('mongoose');

// Internal Modules

const DB = require('../dbConnection');

var txnSchema = mongoose.Schema({
  reservationHash: { type: String },
  tokenCreationHash: { type: String },
  investorListingHash: { tyep: String },
  stoCreationHash: { type: String },
})
var tokenSchema = mongoose.Schema({
  tokenName: { type: String, required: true },
  tickerInitial: { type: String, required: true },
  tokenAddress: { type: String },
  stoAddress: { type: String },
  txnHash: { type: txnSchema },
  divisible: { type: Boolean },
  tokenDetails: { type: String },
  maxInvestors: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },
  hardCap: { type: Number },
  rate: { type: Number },
  fundingAddress: { type: String },
  deployLegacy: { type: Boolean },
  userId: { type: String, required: true }
});

module.exports = DB.model('tokens', tokenSchema); 