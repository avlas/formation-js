
// OWN NAMESPACE
console.log('avlNamespace');

(
    function (window) {
        // private contacts;
        var contacts = [
                        {
                            nom: 'nom contact1',
                            prenom: 'prenom contact1'
                        },
                        {
                            nom: 'nom contact2',
                            prenom: 'prenom contact2'
                        }
        ];

        var avlNamespace = { };

        avlNamespace.listContacts = function () {                         // List a = new ArrayList();
            return contacts;                                              // a.add(contacts());
        }

        // definir ce que je veux exposer a l'exterieur -> public setContacts()
        window.ns = avlNamespace;
    }
)(window);


