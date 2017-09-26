function multiply (x, y) {
    console.log('Nombre d arguments reçus: ', arguments.length);

    return x * y;
}

// --------------------------------------------------------------------------------------------

// 2 arguments
var result = multiply (10, 3);
console.log('10 * 3 = ', result);

// 3 arguments
result = multiply (10, 3, 7);
console.log('10 * 3 * 7 = ', result);

// 3 arguments - NaN
result = multiply (2, 'Formation', 5.);
console.log('2 * \'Formation\' * 5. = ', result);


