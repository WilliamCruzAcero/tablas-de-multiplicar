
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra el tamaño deseado para la tabla'
        
    })
    .check( ( argv, option) => {
        if( isNaN( argv.b) ) {
            throw 'La base debe ser un numero.'
        }
        return true;
    })
    .argv

module.exports = argv    