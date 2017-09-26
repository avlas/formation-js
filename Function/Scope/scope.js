var nom = 'Alina';

function sayHello() {
    var nom = 'Niko';
    console.log('scope.js -> sayHello : nom local = ', nom);
}

sayHello();

console.log('scope.js -> nom global = ', nom);