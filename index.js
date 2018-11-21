const redis = require('redis')
const cmds = require('redis-commands').list
const promisify = require('util').promisify

/**
 * usage:
 * let redis = require('promise-redis-client')
 * let client = redis.createClient()
 * client.set('k', 'v').then(res => {})
 */
module.exports = (() => {
    console.log('hi')
    let clientProto = redis.RedisClient.prototype
    let multiProto = redis.Multi.prototype
    promisifyAllCmd(clientProto) // normal cmd all need promisify
    // for multi only exec, exec_transaction need to promisify
    multiProto.exec_transaction = multiProto.exec = multiProto.EXEC
        = promisify(multiProto.exec)
    return redis
})()

/**
 * promisify all self property to the object
 */
function promisifyAllCmd(obj) {
    cmds.forEach(cmd => {
        (typeof obj[cmd] === 'function') && (obj[cmd] = promisify(obj[cmd]))
    })
}