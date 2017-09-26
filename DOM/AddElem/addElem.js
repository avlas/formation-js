function removeClass(elem, classToRemove){
    if(elem){
        elem.classList.remove(classToRemove);
    }
};

function addClass(elem, classToAdd){
    if(elem){
        elem.classList.add(classToAdd);
    }
};

function addElement(elemToAdd){
    document.body.appendChild(elemToAdd);
};

app = {
    init: function () {
        // MODIFY
        this.modifyElement();

        // ADD
        this.addElement();
    },
    modifyElement : function() {
        var tableauParagraph = document.getElementsByTagName('p');

        if(tableauParagraph && tableauParagraph[0]) {
            var paragraph = tableauParagraph[0];

            window.globalParagraph = paragraph;

            function mouseHandler(event){
                if(event.type === 'mouseover') {
                    if (event.clientX < innerWidth / 2) {
                        // console.log('mouseover p - Gauche');
                        removeClass(globalParagraph, 'text-red');
                    } else {
                        // console.log('mouseover p - Droite');
                        addClass(globalParagraph, 'text-red');
                    }
                } else if (event.type === 'mouseout'){
                    // console.log('mouseout p');
                    addClass(globalParagraph, 'text-red');
                }
            };

            paragraph.onmouseover = mouseHandler;
            paragraph.onmouseout = mouseHandler;
        }
    },
    addElement : function() {
        var h1Title1 = document.getElementById('title-1');

        h1Title1.onclick = function(){
            var p = document.createElement('p');
            p.innerHTML = 'My paragraph';
            addClass(p, 'text-red');

            addElement(p);

            window.globalP = p;

            function mouseHandler(event){
                if(event.type === 'mouseover') {
                    if (event.clientX < innerWidth / 2) {
                        // console.log('mouseover p - Gauche');
                        removeClass(globalP, 'text-red');
                    } else {
                        // console.log('mouseover p - Droite');
                        addClass(globalP, 'text-red');
                    }
                } else if (event.type === 'mouseout'){
                    // console.log('mouseout p');
                    addClass(globalP, 'text-red');
                }
            };

            p.onmouseover = mouseHandler;
            p.onmouseout = mouseHandler;
        }
    }
};


