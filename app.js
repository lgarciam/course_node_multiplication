const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, showTable } = require('./multiplication/multiplication');

let command = argv._[0];
switch(command) {
    case 'create':
        createFile(argv.base, argv.limit)
            .then(resp => console.log('File Created: ', colors.green(resp)))
            .catch(e => console.log(e));
        break;
    case 'list':
        showTable(argv.base, argv.limit);
        break;
    default:
        console.log('Unkown command');

}