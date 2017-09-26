
function multiply (x, y) {
    console.log('Nombre d arguments reçus: ', arguments.length);

    if (typeof x !== 'number') {
        throwError ('x is NaN !');
    } else if (typeof y !== 'number'){
        throw new Error('y is NaN ! ');
    } else {
        return x * y;
    }
}

function throwError (message) {
    throw new Error(message);
}
// --------------------------------------------------------------------------------------------
// NaN
var result;
try {
    result = multiply (2, 'Formation', 5);
} catch (e) {
    console.log(e);
}

try {
    result = multiply ('Formation', 2, 5);
} catch (e) {
    console.log(e);
}

try {
    result = multiply (2, 5, 'Formation');
} catch (e) {
    console.log(e);
}