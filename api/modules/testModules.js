const mongoose = require('mongoose');


const testSchema = new mongoose.Schema({
  //customize this schema based on your application's 
  test: {
    type: String,
    required: true,
    //add your condition and validation
  },
});

const testModule = mongoose.model('testData', testSchema);
// key / refers / to dataBase

module.exports = testModule