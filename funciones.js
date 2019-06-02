const fs = require("fs"); //Traemos el recurso que nos permite crear archivos

listaEstudiantes = []; //Creamos un arreglo para guardar la info de la forma JSON

const crear = (estudiante) => {
  listar();
  let est ={
    nombre:estudiante.nombre,
    ingles:estudiante.ingles,
    matematicas:estudiante.matematicas,
    programacion:estudiante.programacion,
    promedio:undefined
  };

  let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);

  if (!duplicado){

  est.promedio = ((est.ingles + est.programacion + est.matematicas)/3);
  listaEstudiantes.push (est);
  console.log(listaEstudiantes);
  guardar();

  }
  else{
    //Si hay un duplicado lanza un mensaje:
    console.log("Ya existe un estudiante con ese nombre, ingrese otro");
  }
}

const listar = () => {
  try{
    listaEstudiantes = require ("./listado.json"); //Para la forma sincrónica usar "= JSON.parse(fs.readFileSync("listado.json"))"
} catch (error) {
  listaEstudiantes = [];
}
  //Esta función permite dar un valor a listaEstudiantes para que no se borre lo que ya se ingresó anteriormente
  //EL try es para cuando todo funciona correctamente. El catch muestra "error" si aún no existe un arreglo listaEstudiantes y lo crea
}

const mostrar = () => {
  listar();
  console.log("Estas son las notas de los estudiantes: " + "\n");
  listaEstudiantes.forEach(estudiante => {
    console.log("Estudiante " + estudiante.nombre);
    console.log("Notas:");
    console.log("Inglés = " + estudiante.ingles);
    console.log("Matemáticas = " + estudiante.matematicas);
    console.log("Programación = " + estudiante.programacion + "\n");
  })
}

const guardar = () => {
  let datos = JSON.stringify(listaEstudiantes); //Esto es lo que escribiremos en el nuevo archivo. Guardaremos de la forma JSON lo contenido en listaEstudiantes
  fs.writeFile("listado.json", datos, (err) => {
    if(err) throw (err);
    console.log("Archivo creado con éxito");
  });
}

const buenpromedio = () => {
  listar();
  let cracks = listaEstudiantes.filter(pro => pro.promedio > 3);

  if(cracks.length == 0){
    console.log("Ningún estudiante tiene un promedio mayor a 3");
  }
  else{
    console.log("Estos estudiantes tienen promedio mayor a 3: " + "\n");
    cracks.forEach(estudiante => {
      console.log("Estudiante " + estudiante.nombre);
      console.log("Promedio:");
      console.log(estudiante.promedio + "\n");
    })

  }
}

const promedio = (nom) => {
  listar();

  let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
  if (!est){
    console.log("Este estudiante no está registrado");
  }
  else{
    console.log("Estudiante " + est.nombre);
    console.log("Promedio:");
    console.log(est.promedio + "\n");
  }
}


module.exports = {
  crear,
  mostrar,
  promedio,
  buenpromedio
}
// Cuando exportamos la función "crear" también exportamos todo lo necesario para su ejecución, como las funciones "guardar" y "listar"
