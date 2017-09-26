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

function removeElement(elemToRemove){
    document.body.removeChild(elemToRemove);
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

            firstParagraph.onmouseover = mouseHandler;
            firstParagraph.onmouseout = mouseHandler;
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

                            console.log('allParagraphs');

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