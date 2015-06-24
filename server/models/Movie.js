var mongoose = require('mongoose');

// Create the MovieSchema
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    require: true
  }
});

module.exports = MovieSchema;