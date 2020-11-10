//Forma 1
//Crear function
// function greet() {
    //Requerir el archivo greet.js
//     require('./greet.js');
// }
// greet();

//Forma 2

let greet = require('./greet.js');
greet();

let greet2a = require('./greet2.js').greet; // Se expuso una propiedad
greet2a();

let greet2b = require('./greet2.js');
greet2b.greet();

let greet3a = require('./greet3.js');
greet3a.greet();

let greet3b = require('./greet3.js');
greet3b.message='Cambio archivo greet3.js'
greet3b.greet();
console.log(greet3a);

let greet4a = require('./greet4.js');
let myGreet4a = new (greet4a);
let myGreet4b = new (greet4a);
myGreet4a.message = 'Cambio archivo greet4.js'
myGreet4a.greet();
myGreet4b.greet();