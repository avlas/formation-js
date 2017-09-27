
const _ = require('lodash');

function sayHello (name) {
    if (_.isString(name) && !_.isEmpty(name)) {
        console.log('Hello ' + name);
    }
}
function sayBye(name) {
    if (_.isString(name) && !_.isEmpty(name)) {
        console.log('Bye ' + name);
    }
}
module.exports = {
    sayHello: sayHello,
    sayBye: sayBye
};