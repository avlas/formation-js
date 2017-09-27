function sayHello (name) {
    console.log('Hello ' + name);
}
function sayBye(name) {
    console.log('Bye ' + name);
}
module.exports = {
    sayHello: sayHello,
    sayBye: sayBye
};