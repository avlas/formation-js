// var globale
var nom = 'Alina';

function sayHello() {
    // var locale
    var nom = 'Niko';
    console.log('scope.js -> sayHello : nom local = ', nom);
}

// -----------------------------------------------------------------------
// call var locale
sayHello();

// call var globale
console.log('scope.js -> nom global = ', nom);