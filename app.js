require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() =>
{
    mostrarMenu();
    //pausa();

    let opcion = "";

    do
    {
        opcion = await mostrarMenu();
        console.log({opcion});

        if(opcion !== '0')
        {
            await pausa();
        }
       

    }
    while(opcion !== '0');

}

main();