
function Personne (nom, prenom, age) {
    this.nom = nom,
    this.prenom = prenom,
    this.age = age
}

function Stagiaire (nom, prenom, age, connaissances) {

    Personne.call(this, nom, prenom, age);

    this.connaissances = connaissances
}

Stagiaire.prototype = new Personne();
var stagiaire = new Stagiaire('mimi', 'titi', 35, 'connnnnn');

console.log('stagiaire =', stagiaire);
console.log('stagiaire instanceof Stagiaire =', stagiaire instanceof Stagiaire);            // true
console.log('stagiaire instanceof Personne =', stagiaire instanceof Personne);              // true

// -------------------------------------------------------------------------------------------------------------------
// Stagiaire.prototype = new Personne('mimi', 'titi', 35);
//
// var stagiaire2 = new Stagiaire(Stagiaire.prototype.nom, Stagiaire.prototype.prenom, Stagiaire.prototype.age, 'connnnnn');
//
// console.log('Stagiaire.prototype =', Stagiaire.prototype instanceof Personne);          // true
// console.log('Stagiaire.prototype =', Stagiaire.prototype instanceof Stagiaire);         // false
//
// console.log('stagiaire2 =', stagiaire2);
// console.log('stagiaire2 instanceof Stagiaire =', stagiaire2 instanceof Stagiaire);      // true
// console.log('stagiaire2 instanceof Personne =', stagiaire2 instanceof Personne);        // true



