export const hello = (recipient: string, log: (...args: unknown[]) => void) =>
  log(`Hello ${recipient}`);
