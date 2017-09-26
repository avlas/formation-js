
// Callback
var logger = function (a) {
    console.log('1er argument :', a);
};

function firstCallBack(callback) {
    if (callback && typeof callback === 'function') {
        // call la function du logger
        callback('mom premier Callback');
    }
}

// call firstCallBack
firstCallBack(logger);

//-------------------------------------------------------------------------------------

// Pour déclencher un traitement, dans un temps donné, nous pouvons utiliser la méthode setTimeout
// qui prend en argumant un Callback et un temps en milliseconde ainsi que le paramètre que l'on
// souhaite translettre au Callback

// la fonction sera exécutée dans 5000 millisecondes
setTimeout(function () {
    console.log('setTimeout');
}, 5000);

//-------------------------------------------------------------------------------------

//Callback
var hello = function (name, x) {
    console.log('function hello');

    console.log('Hello ' + name + x);
};

function asyncSayHello (name, callback) {                         // synchrone
    console.log('function asyncSayHello #name =', name, '#Callback =', callback);

    if (callback && typeof callback === 'function') {             // synchrone
        console.log('function asyncSayHello #if');

        // call function setTimeout, qui va appeller 'hello(name, 5)' apres un delay de 5000 ms
        setTimeout(callback, 5000, name, 5);                     // asynchrone
    }
}

// call function asyncSayHello
asyncSayHello('Niko', hello);                                     // synchrone





