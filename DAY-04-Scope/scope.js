//*-------Global Scope-------------------------

a=10;
console.log(a);//✅

//*----------Block Scope------------------------
{
    b=20;  //global scope variable(any variable without let ,const, var)
    console.log(b) //✅
    console.log(a); //✅
}

//*------------Function scope or local scope--------------------
function abc(){
    c=30;  //global scope variable(any variable without let ,const, var)
    console.log(c) //✅
    console.log(a); //✅
     console.log(b) //✅
}
abc();
console.log(a); //✅
 console.log(b) //✅
 console.log(c) //✅