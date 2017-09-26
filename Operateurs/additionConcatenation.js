var x = 20;
var y = 5;
var z = 'Formation';

// Addition ---------------------------------------------------- (Number - Number)
var result = x + y;
console.log(' 20 + 5 = ', result);                  // 25

//--------------------------------------------------------------- (Number - String)
// Addition
result = x + y + z;
console.log(' 20 + 5 + Formation = ', result);      // 25Formation

// Concatenation
result = x + z;
console.log(' 20 + Formation = ', result);          // 20Formation

// Concatenation
result = x + z + y;
console.log(' 20 + Formation + 5 = ', result);      // 20Formation5

// Concatenation
result = z + x + y;
console.log(' Formation + 20 + 5 = ', result);      // Formation205

