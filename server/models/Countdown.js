const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
  days: {
    type: String,
    required: 'This fild is required.'
  },
  hour:{
    type: String,
    required: 'This fild is required.'
  },
  seconds:{
    type: String,
    required: 'This fild is required.'
  },
  minutes:{
      type: String,
      required: "This field is required"
  }

});

module.exports = mongoose.model('Countdown', CountdownSchema);