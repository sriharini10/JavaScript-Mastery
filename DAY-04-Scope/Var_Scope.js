//*---------------var in global scope----------
var c=30
console.log(c)
console.log("-------------------------------------")
//*---------------Var in function scope--------------
function abc(){
    var a=10;
    console.log(a); //function scope or local scope variable✅
}
abc()
// console.log(a) //❌not possible bcs it is local scope we cant access outside


console.log("-------------------------------------")

//*---------------Var in block scope------------------ 
//var will not follow block scope 
// if we declare in block scope it act as global scope\

{
    var b=20;
    console.log(b)//✅
}
console.log(b)//act as global variable

//! var follows global and function scope only , it doesn't follows block scope