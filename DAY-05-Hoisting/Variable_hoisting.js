console.log("hiiii");
console.log("helloo");

//* Access b before declaration 
console.log(b); //undefined  ✅

//* Access a before declaration
// console.log(a); // ❌Cannot access 'a' before initialization

//* Acces c before declaration
// console.log(c); // ❌Cannot access 'c' before initialization

let a=10;
var b=20;
const c=30;

//* Access b after declaration 
console.log(b); //20✅

//* Access a after declaration
console.log(a); // 10✅

//* Acces c after declaration
console.log(c); // 30✅



