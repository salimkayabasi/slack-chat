const phin = require('util').promisify(require('phin'));

const baseUrl = 'https://slack.com/api';

class SlackChat {
  constructor(options = {}) {
    this.options = options;
  }

  async makeRequest(method, options) {
    const data = {
      ...options,
      token: this.options.token,
      channel: options.channel || this.options.channel || '#general',
      username: options.username || this.options.username,
    };
    try {
      const response = await phin({
        url: baseUrl + method,
        data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return JSON.parse(response.body);
    } catch (e) {
      return e;
    }
  }

  async postMessage(text) {
    return this.makeRequest('/chat.postMessage', { text });
  }
}

export default SlackChat;
