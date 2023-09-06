const messageConfig = require('express').Router();

const {createMessageConfig} = require('../controllers/messageConfigs');

messageConfig.post('/messageConfig', createMessageConfig)

module.exports = messageConfig;