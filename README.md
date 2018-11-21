[![npm version](https://img.shields.io/npm/v/promise-redis-client.svg?style=flat)](https://www.npmjs.com/package/promise-redis-client) [![downloads](https://img.shields.io/npm/dt/promise-redis-client.svg)](https://www.npmjs.com/package/kitty-fetch-file)

# promise-redis-client

This is a promise style library to use redis client. It based on the Node.js promisify, so you must use it when your node.js greater than Node.js 8.


## Usage

```js
const redis = require('promise-redis-client')
const client = redis.createClient({
    password: ''
})
client.set().then()
// or you can use it in async function with await
async function test() {
    await client.set()
}
```

## Test

```js
npm run test
```

## LICENSE

[MIT LICENSE](./LICENSE)