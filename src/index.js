import https from 'https';
import querystring from 'querystring';

class SlackChat {
  constructor(options = {}) {
    this.options = options;
  }

  async makeRequest(method, options) {
    const data = querystring.stringify({
      ...options,
      token: this.options.token,
      channel: options.channel || this.options.channel || '#general',
      username: options.username || this.options.username,
    });
    const params = {
      hostname: 'slack.com',
      method: 'POST',
      path: `/api${method}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    return new Promise((resolve, reject) => {
      const req = https.request(params, (res) => {
        res.on('data', (chunk) => {
          resolve(JSON.parse(chunk));
        });
      });
      req.write(data);
      req.on('error', (e) => {
        reject(e);
      });
      req.end();
    });
  }

  async postMessage(text) {
    return this.makeRequest('/chat.postMessage', { text });
  }
}

export default SlackChat;
