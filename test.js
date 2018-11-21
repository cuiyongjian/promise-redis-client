var chalk = require('chalk')
var redis = require('./index')
var client = redis.createClient({
    password: ''
});

client.on("error", function (err) {
    console.log(chalk.red('error: ', err.message));
});

client.on('ready', () => {
    console.log(chalk.green('yes, redis can use as promise'))
});

// All your redis commands return promises now.
(async function testAwait() {
    try {
        let res = await client.set('mykey', 'myvalue')
        console.log(chalk.green('redis response: ', res))
    }
    catch(err) {
        console.log(chalk.red('error: ', err.message))
    }
})()