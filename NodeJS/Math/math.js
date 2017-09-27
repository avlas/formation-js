const _ = require('lodash');

function addition(x, y) {
    if (!_.isNumber(x)) {
        throw new Error('x is not a number');
    }

    if (!_.isNumber(y)) {
        throw new Error('y is not a number');
    }

    var result = x + y;
    console.log(x + '+' + y + '=', result);

    return result;
}

function soustraction(x, y) {
    if (!_.isNumber(x)) {
        throw new Error('x is not a number');
    }

    if (!_.isNumber(y)) {
        throw new Error('y is not a number');
    }

    var result = x - y;
    console.log(x + '-' + y + '=', result);

    return result;
}

function multiplication(x, y) {
    if (!_.isNumber(x)) {
        throw new Error('x is not a number');
    }

    if (!_.isNumber(y)) {
        throw new Error('y is not a number');
    }

    var result = x * y;
    console.log(x + '*' + y + '=', result);

    return result;
}

function division(x, y) {
    if (!_.isNumber(x)) {
        throw new Error('x is not a number');
    }

    if (!_.isNumber(y)) {
        throw new Error('y is not a number');
    }

    if (y === 0) {
        throw new Error('Invalid - division by 0');
    }

    var result = x / y;
    console.log(x + '/' + y + '=', result);

    return result;
}

module.exports = {
    add: addition,
    remove: soustraction,
    multiply: multiplication,
    divide: division
};