import request from 'request-promise-native';

const baseUrl = 'https://slack.com/api';

class SlackChat {
  constructor(options) {
    this.options = options || {};
  }

  async makeRequest(method, options) {
    const qs = {
      ...options,
      token: this.options.token,
      channel: options.channel || this.options.channel || '#general',
      username: options.username || this.options.username,
    };
    try {
      const response = await request({
        url: baseUrl + method,
        qs,
      });
      return JSON.parse(response);
    } catch (e) {
      return e;
    }
  }

  async postMessage(text) {
    return this.makeRequest('/chat.postMessage', { text });
  }
}

export default SlackChat;
