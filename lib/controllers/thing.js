console.log('Loading function');

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */

var Thing = require('../models/thing');



module.exports.respond = function(event, cb) {

  var response = {
    'method' : event.httpmethod,
    'key' : event.key,
    'value' : event.value
  };

    var operation = event.metho;

    if (event.tableName) {
        event.payload.TableName = event.tableName;
    }

    switch (event.httpmethod) {
        case 'POST':
            Thing.create(response, cb);
            break;
        case 'GET':
            if (event.key) {
                
            } else{
                
            };   
            break;
        case 'PUT':
            
            break;
        case 'DELETE':
            
            break;
        default:
            
    }
};

  return cb(null, response);
};