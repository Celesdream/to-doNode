const { readFile } = require('fs');
const { resolve } = require('path');

require ('colors');


const mostrarMenu = () =>
{
    return new Promise(resolve =>{

        console.clear();
        console.log('========================='.cyan);
        console.log('  Seleccione una opcion:'.cyan);
        console.log('========================= \n'.cyan);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface
        ({
            input : process.stdin,
            output : process.stdout
        })
    
        readline.question('Seleccione una opcion: ',(opcion)=> {
            readline.close();
            resolve(opcion);
        })

    });


}

const pausa = () => 
{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface
        ({
            input : process.stdin,
            output : process.stdout
        })
    
        readline.question('\n PRESIONE ENTER para continuar \n', (opcion)=>{
            readline.close();
            resolve(); //no hay necesidad de retornar nada 
        })
    })


}




module.exports = { 
    mostrarMenu,
    pausa
}
