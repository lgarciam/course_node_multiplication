const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Show table on command line', opts)
    .command('create', 'Create table on a file', opts)
    .help()
    .argv;

module.exports = {
    argv
}