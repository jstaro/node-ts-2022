import { hello } from './utils.js';

describe('utils', () => {
  test('can call hello', () => {
    let result = '';
    const helloMock = (...args: unknown[]) => {
      [result] = args as string[];
    };

    hello('world', helloMock);
    expect(result).toBe('Hello world');
  });
});
