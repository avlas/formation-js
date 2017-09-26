console.log('scope2.js -> nom global = ', nom);

function sayHello () {
    var nom = 'Niko 2';

    console.log('scope2.js - sayHello : nom local ', nom);
}

nom = 'Nom global à changer';

sayHello();

console.log('scope2.js - nom global :', nom);

