//this is where we are setting up the mongodb connection
const mongoose = require('mongoose');
//bringing in the mongodb string from the config file
const config = require('config');
const db = config.get('mongoURI');

//connecting to mongo database
// calling our server.js
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MondoDB Connected ...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
