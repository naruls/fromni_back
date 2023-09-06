const router = require('express').Router();

const messageConfig = require('./messageConfigs');

router.use('/', messageConfig);

module.exports = router;