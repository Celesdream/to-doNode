const {v4 : uuidv4} = require('uuid');



class Tarea
{
    id = '';
    descripcion = '';
    completadoEn = null;

    //lo que se va a ejecutar cuando ejecutemos esta instancia
    constructor(descripcion)
    {
        this.id = uuidv4();
        this.descripcion = descripcion;

    }
}

module.exports = Tarea;