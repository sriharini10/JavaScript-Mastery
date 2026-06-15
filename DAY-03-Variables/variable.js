var a=10;
var b="vignesh";
let c=100;
let d="rohit";
const e=500;
const f="santanu";

//* console is one object 
//* log is one method

console.log(a,b,c,d,e,f)
console.log(b,d)

console.log("--------------Re-declaration----------------------")

//*---------------Redeclaration of var---------------------


var v1=10
console.log(v1)
var v1=20;       //✅Redeclaration is possible in var
console.log(v1)

//*---------------Redeclaration of  let---------------------


let l1=100
console.log(l1)
// let l1=200;      //❌Identifier 'l1' has already been declared
console.log(l1)

//*---------------Redeclaration of  const---------------------


const c1 =1000;
console.log(c1)
//  const c1=2000; //❌Identifier 'c1' has already been declared
console.log(c1)

console.log("---------------Re-initialization---------------------")

//*---------------Re-Initialization of var---------------------
var v2=10
console.log(v2)
v2=20;       //✅Re-initialization is possible in var
console.log(v2)

//*---------------Re-Initialization of var---------------------
let l2=100;
console.log(l2)
l2=200;       //✅Re-initialization is possible in var
console.log(l2)

//*---------------Re-Initialization of const---------------------
const c2=1000
console.log(c2)
// c2=2000;       //❌Re-initialization is not possible in var
console.log(c2)

console.log("----------------only declaration------------------")

//*----------------only declaration of var----------------------
var v3;   //✅possible
console.log(v3) //undefined

//*----------------only declaration of let----------------------
let l3;  //✅possible
console.log(l3)//undefined

//*----------------only declaration of const----------------------
// const c3;  //❌not possible
// console.log(c3) //❌error