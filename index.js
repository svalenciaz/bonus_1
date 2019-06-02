const {argv} = require ("./yarg");
const funciones = require ("./funciones");

let comando = argv._[0];

switch (comando) {

  case "crear":
    funciones.crear(argv);
    break;

  case "mostrar":
    funciones.mostrar();
    break;

  case "promedio":
    funciones.promedio(argv.nombre);
    break;

  case "buenpromedio":
    funciones.buenpromedio();
    break;

  default:
    console.log("No ingresaste una función existente");
}
