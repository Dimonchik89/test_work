const { findServer } = require('./index.js');

console.log(`This is a test script for module. Let's run test`);

const main = async () => {
  const result = await findServer();
  console.log('[result]: ', result);
}

main();