const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    let salida = '';
    let consola = '';
   
    const header = 
`===================
   Tabla del: ${base}
===================`

    try {
        
        for ( i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${colors.yellow(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.cyan(base * i)}\n`;

        }
        
        if ( listar ) {
            console.log(colors.green('==================='))
            console.log(colors.green('   Tabla del: '), colors.blue(base))
            console.log(colors.green('==================='))
                
            console.log(consola)
        }

        fs.writeFileSync(`./archivoDb/tabla-${base}.txt`, `${header}\n${salida}`)

        return(`Archivo: tabla-${base}.txt creado`)
        } catch (err) {
            return err    
        }
}

module.exports = {
    crearArchivo
}