const slackRequest = require('./request');

const methodPrefix = 'chat';

let config;

exports.setParameters = (opts) => {
  config = opts;
};

exports.postMessage = (text, cb) => {
  slackRequest(`${methodPrefix}.postMessage`,
    config.token,
    config.channel,
    config.username,
    { text },
    cb);
};
