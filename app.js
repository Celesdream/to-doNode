require('colors');

const { inquirerMenu, pausa} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



console.clear();

const main = async() =>
{
    let opcion = "";
    const tareas = new Tareas();

    do
    {
        opcion = await inquirerMenu();

        switch(opcion)
        {
            case '1':
                
                break;

            case '2' : 
            console.log(tareas._listado);
        }


        //console.log({opcion});
        // const tareas = new Tareas();
        // const tarea = new Tarea('comprar algo');
        // tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        await pausa();
    }
    while(opcion !== '0');

}

main();