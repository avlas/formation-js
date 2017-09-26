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

function addElement(elem){
    elem.innerHTML = 'My paragraph';
    addClass(elem, 'text-red');

    document.body.appendChild(elem);
};

function removeElement(elem){
    document.body.removeChild(elem);
};

app = {
    init: function () {
        // MODIFY
        this.modifyElement();

        // ADD
        this.addElement();

        // REMOVE
        this.removeElement();
    },
    modifyElement : function() {
        var allParagraphs = document.getElementsByTagName('p');

        if(allParagraphs && allParagraphs[0]) {
            var firstParagraph = allParagraphs[0];

            window.globalParagraph = firstParagraph;

            function mouseHandler(event){
                if(event.type === 'mouseover') {
                    if (event.clientX < innerWidth / 2) {                       // survol paragraph a GAUCHE
                        removeClass(globalParagraph, 'text-red');
                    } else {
                        addClass(globalParagraph, 'text-red');                  // survol paragraph a DROITE
                    }
                } else if (event.type === 'mouseout'){
                    addClass(globalParagraph, 'text-red');
                }
            };

            firstParagraph.onmouseover = mouseHandler;
            firstParagraph.onmouseout = mouseHandler;
        }
    },
    addElement : function() {
        var h1Title1 = document.getElementById('title-1');

        h1Title1.onclick = function(){
            var p = document.createElement('p');
            addElement(p);

            window.globalParagraph = p;

/*            function mouseHandler(event){
                        if(event.type === 'mouseover') {
                            if (event.clientX < innerWidth / 2) {
                                removeClass(globalParagraph, 'text-red');
                            } else {
                                addClass(globalParagraph, 'text-red');
                            }
                        } else if (event.type === 'mouseout'){
                            addClass(globalParagraph, 'text-red');
                        }
                    };

            p.onmouseover = mouseHandler;
            p.onmouseout = mouseHandler;*/
        }

        var allParagraphs = document.getElementsByTagName('p');
        if(allParagraphs && allParagraphs[0]) {
            var paragraph = allParagraphs[0];

            window.globalParagraph = paragraph;

            function mouseHandler(event){
                if(event.type === 'mouseover') {
                    if (event.clientX < innerWidth / 2) {
                        removeClass(globalParagraph, 'text-red');
                    } else {
                        addClass(globalParagraph, 'text-red');
                    }
                } else if (event.type === 'mouseout'){
                    addClass(globalParagraph, 'text-red');
                }
            };

            paragraph.onmouseover = mouseHandler;
            paragraph.onmouseout = mouseHandler;
        }

    },
    removeElement : function() {
        var allDelButtons = document.getElementsByClassName('del');
        if(allDelButtons && allDelButtons[0]) {
            var delButton = allDelButtons[0];

            function btnClickHandler(event){
                if(event.type === 'click') {

                    var allParagraphs = document.getElementsByTagName('p');
                    if(allParagraphs) {
                        while( allParagraphs[0]) {
                            var paragraph = allParagraphs[0];
                            removeElement(paragraph);
                        }
                    }
                }
            };

            delButton.onclick = btnClickHandler;
        }
    }
};