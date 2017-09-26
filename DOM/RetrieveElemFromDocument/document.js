var app = {
    init: function () {
        console.log('RetrieveElemFromDocument title: ', document.title);

        document.title = 'Nouveau titre';

        console.log('RetrieveElemFromDocument title: ', document.title);
    }
};

app.init();

console.log( document.getElementsByTagName('h1') );
console.log( document.getElementsByClassName('text-red') );
console.log( document.getElementById('title') );