import SlackChat from '../src/';

const token = process.env.SLACK_TOKEN;

describe('SlackChat', () => {
  test('postMessage', async () => {
    const bot = new SlackChat({
      token,
      username: 'slack-bot',
    });

    const result = await bot.postMessage(`This is message from ${new Date()}`);
    expect(result.ok).toBe(true);
  });
});
