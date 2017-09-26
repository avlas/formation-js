console.log('avlNamespace ');

(
    function (window) {
        var avlNamespace = { };

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

        // List a = new ArrayList();
        // a.add(contacts());

        avlNamespace.listContacts = function () {
            return contacts;
        }

        // definir ce que je veux exposer a l'exterieur -> public setContacts()
        window.ns = avlNamespace;
    }
)(window);


