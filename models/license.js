var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var licenseSchema = new Schema({
  name: String,
  number: String,
  duedate: Date,
  hoursReq: Number,
  hours: Number
});

var License = mongoose.model('License', licenseSchema);

var exportObj = {};

exportObj.model = License;
exportObj.schema = licenseSchema;

module.exports = exportObj;
