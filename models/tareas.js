

// _listado
// {uuid-3123123-23121--2:{id:12,desc:asd, completadoEn:9242}}

const Tarea = require("./tarea");

class Tareas
{
    
    _listado = 
    {}

    constructor()
    {
        this._listado = {};
    }

    //metodo crear tarea
    crearTarea(descripcion = '')
    {
        const tarea = new Tarea(descripcion);
        this._listado['tarea.id'] = tarea;

    }

}

module.exports = Tareas;