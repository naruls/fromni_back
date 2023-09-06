const MessageConfig = require('../models/messageConfigs');

module.exports.createMessageConfig = (req, res, next) => {
    MessageConfig.create({...req.body})
        .then((data) => res.send({data:data}))
        .catch((err) => console.log(err))
}