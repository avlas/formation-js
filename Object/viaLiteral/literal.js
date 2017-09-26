// Object - complex
// literal ( cle-valeur )

var maVariable = {
                     nom : 'Module JavaScript'
};
console.log('Ma variable : ', maVariable);

// -------------------------------------------------------------------------------------
var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires : [
                     {
                         nom: 'exemple Nom',
                         prenom: 'exemple Prenom'
                     }
                 ]
};

console.log('nom =', formationJS.nom);
console.log('langage =', formationJS.langage);
console.log('dateDebut =', formationJS.dateDebut);
console.log('dateFin =', formationJS.dateFin);
console.log('stagiaires = ', formationJS.stagiaires);
console.log('stagiaires.nom = ', formationJS.stagiaires[0].nom);

// -------------------------------------------------------------------------------------- add dynamique = via literal
formationJS.formateur = {
    nom : 'Hodicq',
    prenom : 'Nicolas'
};
console.log('formationJS.formateur.nom = ', formationJS.formateur.nom);


// -------------------------------------------------------------------------------------- add dynamique = via Function
formationJS.description = function () {
    return formationJS.nom + ' ' + formationJS.dateDebut + ' ' + formationJS.dateFin;
};
console.log('formationJS.description = ', formationJS.description);

console.log('formationJS.description() = ', formationJS.description());

// -------------------------------------------------------------------------------------- delete dynamique
delete formationJS.stagiaires;
console.log('formationJS = ', formationJS);