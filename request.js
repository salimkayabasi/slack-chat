var request = require('request');
var baseUrl = 'https://slack.com/api/';

module.exports = function (method, options, token, channel, username, cb) {
  options.token = token;
  options.channel = options.channel || channel || '#general';
  options.username = options.username || username;
  request({ url: baseUrl + method, qs: options }, function (err, response, body) {
    if (cb) {
      cb(err, response, body);
    }
  });
};
