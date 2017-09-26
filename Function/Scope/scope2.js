// retrieve var globale
console.log('scope2.js -> nom global = ', nom);

function sayHello () {
    var nom = 'Niko 2';

    console.log('scope2.js - sayHello : nom local ', nom);
}

// modify var globale
nom = 'Nom global à changer';

// ---------------------------------------------------------------------------------
// call var locale
sayHello();

// call var globale
console.log('scope2.js - nom global :', nom);

