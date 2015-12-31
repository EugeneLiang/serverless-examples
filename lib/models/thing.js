var vogels = require('vogels');
vogels.AWS.config.update({region: "eu-west-1"});

var Thing = vogels.define('Thing', {
  hashKey : 'key',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : true,

  schema : {
    key   : Joi.string(),
    value    : Joi.string()
  },

  tableName: 'serverless-examples-things'
});


module.exports = Thing;