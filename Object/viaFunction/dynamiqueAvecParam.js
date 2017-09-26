// Object - complex
// via FUNCTION

function Formation (nom, langage, dateDebut, dateFin, stagiaires) {
    this.nom = nom,
    this.langage = langage,
    this.dateDebut = dateDebut,
    this.dateFin = dateFin,
    this.stagiaires = stagiaires
}

var formation = new Formation('Module JavaScript', 'javaScript', '01/09/2017', '05/09/2017', [ { nom: 'exemple Nom', prenom: 'exemple Prenom' } ]);

console.log('nom =', formation.nom);                            // formation.nom c'est this.nom du formation
console.log('langage =', formation.langage);
console.log('dateDebut =', formation.dateDebut);
console.log('dateFin =', formation.dateFin);
console.log('stagiaires = ', formation.stagiaires);
console.log('stagiaires.nom = ', formation.stagiaires[0].nom);

delete formation.__proto__.__proto__.hasOwnProperty;
console.log('formation', formation);