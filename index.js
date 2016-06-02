var slackRequest = require('./request');
var methodPrefix = 'chat';

var slackConfig;

exports.setParameters = function(slackConfig_) {
  slackConfig = slackConfig_;
};

exports.postMessage = function (text, cb) {
  slackRequest(methodPrefix + '.postMessage',
    slackConfig.token,
    slackConfig.channel,
    slackConfig.username,
  {
    text: text
  }, cb);
};
