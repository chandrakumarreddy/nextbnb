export default function retry(fn, retryCount = 3, interval) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((err) => {
        if (retryCount > 0) {
          setTimeout(() => {
            retry(fn, retryCount - 1, interval).then(resolve, reject);
          }, interval);
        } else {
          reject(err);
          return;
        }
      });
  });
}
