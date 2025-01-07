export const waitFor = (timeout = 300): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, timeout);
  });
