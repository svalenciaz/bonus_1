const matematicas = {
    demand:true,
    alias:"m"
  };

const ingles = {
    demand:true,
    alias:"i"
  };

const programacion = {
    demand:true,
    alias:"p"
  };

const nombre = {
    demand:true,
    alias:"n"
  };

const creacion = {
  matematicas,
  ingles,
  programacion,
  nombre
};

const promedio = {
  nombre
}

const mostrando = {
  nombre
}


const argv = require("yargs")
            .command("crear", "Crear un estudiante", creacion)
            .command("promedio", "Mostrar el promedio de un estudiante", promedio)
            .command("buenpromedio", "Estudiantes con más de 3 en el promedio")
            .command("mostrar", "Mostrar estudiantes", mostrando)
            .argv;


module.exports = {
  argv,
};
