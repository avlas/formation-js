var app = {
    init: function () {
        console.log('RetrieveElemFromDocument title: ', document.title);

        document.title = 'Nouveau titre';

        console.log('RetrieveElemFromDocument title: ', document.title);
    }
};

var tableauParagraph = document.getElementsByTagName('p');

if(tableauParagraph !== undefined && tableauParagraph.length >= 1) {
   //  var paragraph = tableauParagraph.firstChild;
    var paragraph = tableauParagraph.[0];

    // Choix 1
    paragraph.addEventListener('mouseover', function (e) {
        console.log('mouseover - mouseEvent = X', e.clientX);
        console.log('mouseover - mouseEvent = Y', e.clientY);

        if (e.clientX < innerWidth / 2) {
            console.log('Gauche');
        } else {
            console.log('Droite');
        }
    });

    // Choix 2
    // paragraph.onmouseover = function () {
    //      console.log('mouseover - Hello p');
    // };

    paragraph.onmouseout = function (e) {
        console.log('mouseout - mouseEvent = X', e.clientX);
        console.log('mouseout - mouseEvent = Y', e.clientY);
    };
}
