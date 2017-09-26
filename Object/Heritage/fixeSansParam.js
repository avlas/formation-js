
function Personne () {
    this.nom = 'mimi',
    this.prenom = 'titi',
    this.age = 35
}

function Stagiaire () {
    this.connaissances = 'connnnn'
}

Stagiaire.prototype = new Personne();

var stagiaire =  new Stagiaire();

console.log('stagiaire.__proto__ =', stagiaire.__proto__ instanceof Personne);      // true
console.log('stagiaire.__proto__ =', stagiaire.__proto__ instanceof Stagiaire);     // false

console.log('stagiaire =', stagiaire);
console.log('stagiaire instanceof Stagiaire =', stagiaire instanceof Stagiaire);    // true
console.log('stagiaire instanceof Personne =', stagiaire instanceof Personne);      // true