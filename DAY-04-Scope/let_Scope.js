//*-------------let in global scope--------------------
let a=20;
console.log(a)

//*------------let in block scope---------------------------

{
    let b=30;
    console.log(b); // let follows block scope
}
// console.log(b) //❌reference error

//*------------let in function scope---------------------------

function abc(){
    let c=40;
    console.log(c);
}
abc()
// console.log(c)//❌reference error


//! let follows all three scope (global,block,function)