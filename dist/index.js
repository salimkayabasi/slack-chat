'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const baseUrl = 'https://slack.com/api/';

class SlackChat {
  constructor(options) {
    this.options = options || {};
  }

  makeRequest(method, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const qs = _extends({}, options, {
        token: _this.options.token,
        channel: options.channel || _this.options.channel || '#general',
        username: options.username || _this.options.username
      });
      return (0, _requestPromiseNative2.default)({
        url: baseUrl + method,
        qs
      });
    })();
  }

  postMessage(text) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return _this2.makeRequest('chat.postMessage', { text });
    })();
  }
}

exports.default = SlackChat;