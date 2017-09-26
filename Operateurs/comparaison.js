
// COMPARAISON (verifie TYPES, ensuite verifie VALEURS)

// FAIBLE ==
// verifie TYPES  (typeof) :
// ci differents   => conversion en VALEURS d'un même type
//                    verification egalite VALEURS par comparaison
// ci meme         => verifie egalite VALEURS par comparaison

// FORTE ===
// verifie TYPES (typeof) :
// ci differentes  => PAS de verification d'egalite VALEURS (pas la comparaison) => FALSE
// ci meme         => verifie egalite VALEURS par comparaison :
//                          TRUE (meme type  / meme valeur)
//                          FALSE (meme type  / valeur differente)


var x;
var y;
console.log(' x == y :', x == y);               // true
console.log(' x === y ', x === y);              // true

x = 2;
y = 'Formation';
console.log(' 2 == Formation : ', x == y);      // false
console.log(' 2 === Formation :', x === y);     // false

x = 2;
y = '2';
console.log(' 2 == str 2 : ', x == y);          // true
console.log('  2 === str 2 :', x === y);        // false


x = undefined;
y = null;
console.log('Égalité faible : ', x == y);       // true
console.log('Égalité forte', x === y);          // false

console.log(' typeof x', typeof x);             // undefined
console.log(' typeof y ', typeof y);            // object


