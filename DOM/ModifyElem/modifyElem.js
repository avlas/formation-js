
function addClass(elem, classToAdd){
    if(elem){
        elem.classList.add(classToAdd);
    }
};

function removeClass(elem, classToRemove){
     if(elem){
         elem.classList.remove(classToRemove);
     }
};

app = {
    init: function () {
        this.modifyElement();
    },

    modifyElement : function() {
        var tableauParagraph = document.getElementsByTagName('p');

        if(tableauParagraph && tableauParagraph[0]) {
            var paragraph = tableauParagraph[0];

            window.globalParagraph = paragraph;

            function mouseHandler(e){
                if(e.type === 'mouseover') {
                    if (e.clientX < innerWidth / 2) {
                        console.log('mouseover p - Gauche');
                        removeClass(globalParagraph, 'text-red');
                    } else {
                        console.log('mouseover p - Droite');
                        addClass(globalParagraph, 'text-red');
                    }
                } else if (e.type === 'mouseout'){
                    console.log('mouseout p');
                    addClass(globalParagraph, 'text-red');
                }
            };

            paragraph.onmouseover = mouseHandler;
            paragraph.onmouseout = mouseHandler;
        }
    }
};


