const Tarea = require('./tarea');

class Tareas
{
    _listado = {};

    get listadoArray()
    {
        const listado = [];

        Object.keys(this._listado).forEach(key => 
            {
                const tarea = this._listado[key];
                listado.push(tarea);
            });

        return listado;
    }

    constructor()
    {
        this._listado = {};
    }

    borrarTraea(id = '')
    {
        if(this._listado[id])
        {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = [])
    {
        tareas.forEach(tarea => 
            {
                this._listado[tarea.id] =  tarea;

            });
    }

    //metodo crear tarea
    crearTarea(descripcion = '')
    {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto()
    {
        //listado numerado de las tareas
        //console.log(this.listadoArray);
        console.log();
        this.listadoArray.forEach((tarea,i) =>
        {
            const idx =  `${i +1}`.white;
            const {descripcion,completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.grey

            console.log(`${idx} ${descripcion} :: ${estado}`);
        });
        
    }


    listarPendientesCompletadas(completadas = true) 
    {
        let estado;
        const tareasFiltradas = this.listadoArray.filter((elemento) => 
        {
            if (completadas) 
            {
                return elemento.completadoEn !== null;
            } 
            else 
            {
                return elemento.completadoEn === null;
            }
        });

        tareasFiltradas.forEach((tarea, i) => 
        {
            const idx = `${i + 1}`.white;
            const { descripcion, completadoEn } = tarea;


            if (completadoEn) 
            {
                estado = 'Completada'.green;
            } 

            else 
            {
                estado = 'Pendiente'.grey;
            }

            console.log(`${idx} ${descripcion} :: ${completadoEn}`);
        });
    }


    toggleCompletadas(ids = [])
    {
        ids.forEach(id => 
            {
                const tarea = this._listado[id];
                if(!tarea.completadoEn)
                {
                    tarea.completadoEn = new Date().toISOString();
                }

            });


        this.listadoArray.forEach(tarea => 
            {
                if(!ids.includes(tarea.id))
                {
                    this._listado[tarea.id].completadoEn = null;
                }
            });

    }

}

module.exports = Tareas;