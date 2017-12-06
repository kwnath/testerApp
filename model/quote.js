const AV = require('../utils/av-weapp-min.js');

class message extends AV.Object {

}

AV.Object.register(message, 'message');
module.exports = message;
