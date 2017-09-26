function Formation () {
    this.nom = 'Module JavaScript',
    this.langage = 'javaScript',
    this.dateDebut = '01/09/2017',
    this.dateFin = '05/09/2017',
    this.stagiaires = [
                            {
                                nom: 'exemple Nom',
                                prenom: 'exemple Prenom'
                            }
                      ]
}
var formation = new Formation();

console.log('nom =', formation.nom);
console.log('langage =', formation.langage);
console.log('dateDebut =', formation.dateDebut);
console.log('langage =', formation.langage);
console.log('dateFin =', formation.dateFin);
console.log('stagiaires = ', formationJS.stagiaires);
console.log('stagiaires.nom = ', formationJS.stagiaires[0].nom);