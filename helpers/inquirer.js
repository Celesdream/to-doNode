const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message : 'que desesa hacer?',
        choices : 
        [
            {
                value   : '1',
                name    : `${'1.'.green} Crear tarea`
            },

            {
                value   : '2',
                name    : `${'2.'.green} Listar tareas`
            },

            {
                value   : '3',
                name    : `${'3.'.green} Listar tareas completadas`
            },

            {
                value   : '4',
                name    : `${'4.'.green} Listar tareas pendientes`
            },

            {
                value   : '5',
                name    : `${'5.'.green} Completar tarea(s)`
            },
            
            {
                value   : '6',
                name    : `${'6.'.green} Borrar tarea(s)`
            },

            {
                value   : '0',
                name    : `${'0.'.green} Salir`
            },

        ]
    }
]


const inquirerMenu = async()=>
{
    console.clear();
    console.log('========================='.blue);
    console.log('  Seleccione una opcion:'.white);
    console.log('========================= \n'.blue);

    //desectrutruamos la opcion, que es lo que queremos
    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async () => 
{
    const pregunta = 
    [
        {
            type : 'input',
            name : 'enter',
            message : `Presiones ${'enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(pregunta)


}

const leerInput = async(message) =>
{
    const pregunta = 
    [
        {
            type:'input',
            name: 'descripcion',
            message,
            validate(value)
            {
                if(value.length === 0)
                {
                    return 'Por favor ingresa un valor';
                }
                return true;
            }
        
        }
    ];

    const {descripcion} = await inquirer.prompt(pregunta);
    return descripcion;
}


const listadoBorrar = async(tareas = []) => 
{
    const choices = tareas.map((tarea,i) =>
    {
        const idx = `${i + 1}.`.green;
        return  {
                    value : tarea.id,
                    name : `${idx} ${tarea.descripcion}`
                }
    });

    choices.unshift
    ({
        value : '0',
        name : '0.'.green +'Cancelar'
    });


    const preguntas = 
    [
        {
            type : 'list',
            name : 'id',
            message : 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

}


const confirmar = async (message) =>
{
    const confirmacion = 
    [{
        type : 'confirm',
        name : 'ok',
        message
    }];

    const {ok }= await inquirer.prompt(confirmacion);
    return ok;
}




const listadoChecklist = async(tareas = []) => 
{
    const choices = tareas.map((tarea,i) =>
    {
        const idx = `${i + 1}.`.green;
        return  {
                    value : tarea.id,
                    name : `${idx} ${tarea.descripcion}`,
                    checked : (tarea.completadoEn) ? true : false
                }
    });



    const pregunta = 
    [
        {
            type : 'checkbox',
            name : 'ids',
            message : 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;

}


module.exports =  {inquirerMenu,pausa,leerInput,listadoBorrar,confirmar,listadoChecklist}
