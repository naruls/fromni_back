const mongoose = require('mongoose');

const hotKeySchema = new mongoose.Schema({
    name: {
      type: String,
    },
    type: {
        type: String,
        minlength: 4,
        maxlength: 7,
      },
  });

const messageConfigSchema = new mongoose.Schema({
    messageText: {
      type: String,
      maxlength: 4096,
    },
    channel: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 8,
    },
    display: {
        type: String,
        required: true,
        minlength: 13,
        maxlength: 15,
    },
    hotKeys: [{hotKeySchema}]
  });
  
  module.exports = mongoose.model('messageConfig', messageConfigSchema);