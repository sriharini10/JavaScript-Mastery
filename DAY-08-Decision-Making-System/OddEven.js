function oddOrEven(a){
    if(a%2===0){
        console.log("even number")

    }
    else if(isNaN(a%2)){
        console.log("provide only number datatype")
    }
    else{
        console.log("odd number")
    }
}
oddOrEven(8);
oddOrEven(5);
oddOrEven("abc");

console.log("--------------------------------")

function oddOrEven2(b){
    if(!(typeof a === "number")){
        console.log("please provide valid number")
    }
    else if(a%2===0){
        console.log("even number")

    }
    else{
        console.log("odd number")
    }

}
oddOrEven(8);
oddOrEven(5);
oddOrEven("abc");