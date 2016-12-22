const _ = require('lodash');
const request = require('request');

const baseUrl = 'https://slack.com/api/';

module.exports = (method, token, channel, username, options, cb) => {
  const qs = _.extend(_.clone(options), {
    token,
    channel: options.channel || channel || '#general',
    username: options.username || username
  });
  request({ url: baseUrl + method, qs }, (err, response, body) => {
    if (cb) {
      cb(err, response, body);
    }
  });
};
