require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa,leerInput, listadoBorrar,confirmar,listadoChecklist} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() =>
{
    let opcion = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB)
    {
        //establecemos las tareas que ya han sido guardadas
        tareas.cargarTareasFromArray(tareasDB);
    }


    do
    {
        //imprime el menu
        opcion = await inquirerMenu();

        switch(opcion)
        {
            case '1':
                const descripcion =  await leerInput('Descripcion: ');
                tareas.crearTarea(descripcion);
                break;

            case '2' : 
                tareas.listadoCompleto(); 
                break;

            //listar completadas
            case '3' :
                tareas.listarPendientesCompletadas(true);
                break;

            //listar pendientes
            case '4' :
                tareas.listarPendientesCompletadas(false);
                break;

            case  '5' :
                const ids =    await listadoChecklist(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
                break;


            case '6':
                //hay que esperar que esta tarea asincrona termine
                const id = await listadoBorrar(tareas.listadoArray);
                if(id!=0)
                {
                    const ok =  await confirmar("estas seguro?");
                    if(ok)
                    {
                        tareas.borrarTraea(id);
                        console.log("la tarea ha sido eliminada");
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArray);
        await pausa();
    }
    while(opcion !== '0');

}

main();