console.log(2+2) //4
console.log("20"+2)//202  (the 2 is converted to string)
console.log("20"-2) //18 (20 is converted to number bcs string cannot perform - operation 20-2=18)
console.log("a"+2) //a2 (2 is converted to string)
console.log("a"-2) //NaN (a cannot be converted to number)
console.log("abc"*2) //Nan (abc cannot be converted to number)

console.log("5"+5-5)  //50 (55-5=50)
console.log(5*5+5+"a") //30a (25+5)->(30+"a")->30a
console.log(10+20+"a"-" ") //NaN (30a-" ")->cannot perform - on string
console.log(undefined+5) //NaN

console.log("----------------------------")


//* ------------------ comparision by using(==) equality operator----------------------

//!compares only the data(value)

console.log("5" == 5)  //true
console.log(true == 1) //true
console.log(false == 0)  //true


//*-----------------------comparision using (===) strict equality operator--------------------

//!compares data(value) as well as datatype

console.log("5"===5) //false
console.log(true===1) //false
console.log(false===0) //false
