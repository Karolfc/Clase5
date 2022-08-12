/**
 * 1. instalar Node
 * 2. crear archivo index.js con un console.log('hi')
 * 3. correr el archivo con node index.js
 * 4. crear un modulo de Node
 */

const math = require('./math.js'); // es relativo porque sino se va al OS
console.log(math);
console.log(math(1, 2));
console.log('////////////////////////////');

/**
 * tambien pueden importar modulos que Node ya trae consigo
 */
const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
/*
console.log("////////////////////////////");

const fs = require("fs");
fs.writeFile("nuevo.txt", "hola, soy el contenido", (err) => {
  if (err) {
    console.log("hubo un error");
  } else {
    console.log("se creó con éxito");
  }
});

fs.readFile("./nuevo.txt", (err, data) => {
  if (err) {
  } else {
    console.log(data);
    console.log(data.toString());
  }
});
*/
console.log('////////////////////////////');
/**
 * usar modulos de otra gente
 * explicar diferencia entre modulo, paquete (conjunto de modulos), librería, framework
 * explicar como npm nos ayuda a traer esos paquetes
 *
 * npm install <paquete>
 * explicar nodeModules
 * explicar dependencies
 * explicar package-lock.json
 *
 */
const _ = require('lodash');
console.log(_);
console.log(_.capitalize('pedro'));
console.log(_.camelCase('pedro es una buena persona'));
console.log(_.snakeCase('pedro es una buena persona'));
console.log(_.kebabCase('pedro es una buena persona'));

console.log('////////////////////////////');

/**
 * npm init vs npm init -y
 * explicar que es el package.json
 * explicar devDependcies vs dependecies
 * explicar como agregar el comando start
 * explicar porque otros commandos requieren npm run otroComando
 */
/**
  ¿Modulo?
  Conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar.

  ¿Paquete?
  Un paquete es uno o más archivos . js (módulos) agrupados (o empaquetados) juntos

  ¿Libreria?
  Nos permiten reutilizar código que otros desarrolladores han escrito y publicado. Paquetes en node

  ¿Framework?
  Un framework es un esquema o marco de trabajo que ofrece una estructura
  base para elaborar un proyecto con objetivos específicos
  */

/**
 ¿Qué es npm?
  Manejador de paquetes de node, es la herramienta por defecto de JavaScript
  para la tarea de compartir e instalar paquetes.

  ¿Qué es el package.json?
  Este archivo indica a npm que el directorio en el que se encuentra es en efecto un proyecto
  o paquete npm. Este archivo contiene la información del paquete incluyendo la
  descripción del mismo, versión, autor y más importante aún dependencias.

  Este archivo es generado automáticamente mediante la
  ejecución de un script de npm: npm init

  ¿npm scripts?
  Esta sección define un listado de propiedades que permiten ejecutar comandos
  dentro del contexto de tu proyecto incluyendo: comandos de otros paquetes
  listados como dependencias, scripts personalizados, scripts bash, etc.

  dependencies vs devDependencies
  Dependencies está destinado a ser utilizando en producción y
  devDependencies define paquetes que son necesarios sólo durante
  el desarrollo de tu proyecto.

  Instalar en devDependencie: npm install <package-name> --save-dev

  ¿package-lock.json?
  Es auto generado por npm install y es una lista descriptiva y exacta de las versiones instaladas durante tu proceso.
  Información de las versiones instaladas de los paquetes.

 */

/*
  Para correr el script papiCorraPues del package.json es necesario hacerlo con
  npm run papiCorraPues
*/
