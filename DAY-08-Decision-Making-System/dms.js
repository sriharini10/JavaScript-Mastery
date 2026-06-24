//* falsy values  --> false,0,"",null,Nan,undefined (except this 6 value all other are called as truthy values)


let a=10

if(a){
    console.log("i will be executed for truthy values")
}
else{
    console.log("i will be executed only for falsy values")
}

