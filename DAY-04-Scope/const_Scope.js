//*-------------const in global scope--------------------
const a=20;
console.log(a)

//*------------const in block scope---------------------------

{
    const b=30;
    console.log(b); // let follows block scope
}
// console.log(b) //❌reference error

//*------------const in function scope---------------------------

function abc(){
    const c=40;
    console.log(c);
}
abc()
// console.log(c)//❌reference error


//! const follows all three scope (global,block,function)