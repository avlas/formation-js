// console.log('Formation JavaScript Node.js');

var math = require('./math');

var result;
try {
    result = math.add(3, 5);
} catch (e) {
    console.log(e.message);
}

try {
    result = math.remove(5, 3);
} catch (e) {
    console.log(e.message);
}

try {
    result = math.multiply(3, 5);
} catch (e) {
    console.log(e.message);
}

try {
    result = math.divide(3, 5);
} catch (e) {
    console.log(e.message);
}