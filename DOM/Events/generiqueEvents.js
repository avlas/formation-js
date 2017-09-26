var app = {
    init: function () {
        // console.log('RetrieveElemFromDocument title: ', document.title);
        //
        // document.title = 'Nouveau titre';
        //
        // console.log('RetrieveElemFromDocument title: ', document.title);

        this.initializeParagraphListener();
    },
    initializeParagraphListener : function() {
        var tableauParagraph = document.getElementsByTagName('p');

        if(tableauParagraph && tableauParagraph[0]) {
            var paragraph = tableauParagraph[0];

            function mouseHandler(e){
                // console.log(e);

                if(e.type === 'mouseover') {
                    console.log('p - mouseover');

                    if (e.clientX < innerWidth / 2) {
                        console.log('Gauche');
                    } else {
                        console.log('Droite');
                    }
                } else if (e.type === 'mouseout'){
                    console.log('p - mouseout');
                }
            };

            paragraph.onmouseover = mouseHandler;
            paragraph.onmouseout = mouseHandler;
        }
    }
};


