export const hello = (recipient: string, log: (...args: unknown[]) => void) =>
  log(`Hello ${recipient}`);

// eslint-disable-next-line no-console
hello('world', console.log);
