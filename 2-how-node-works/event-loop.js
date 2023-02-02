const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;
/**
 * Its default size is 4,
 * but it can be changed at startup time by setting the UV_THREADPOOL_SIZE environment variable to any value
 * (the absolute maximum is 1024).
 * Changed in version 1.30. 0: the maximum UV_THREADPOOL_SIZE allowed was increased from 128 to 1024.
 */

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('----------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');
});

console.log('Hello from the top-level code');
