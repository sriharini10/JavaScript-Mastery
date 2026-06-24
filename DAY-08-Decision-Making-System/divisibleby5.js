function divisible(num){
    

    if(num%5===0){
        console.log("divisible by 5")
    }
    else if(num%7===0){
        console.log("divisible by 7")
    }
    else if(num%5===0 && num%7===0){
        console.log("divisible by 5 and 7")
    }
    else{
        console.log("not divisible by 5 and 7")
    }
}
divisible(25);
divisible(49);