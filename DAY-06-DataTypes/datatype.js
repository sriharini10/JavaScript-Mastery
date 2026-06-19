let num1=10;
let num2=10.45;

//* number datatype can handle 16 digits accurately 
//* if more than 16 digits in number datatype means it handle but approximately

let num3=789456123147895298n;

console.log(num1,typeof num1);
console.log(num2,typeof num2);
console.log(num3,typeof num3);


//-------------------------------------------------

//* string datatype

let str1="nayanthara";
let str2="hansika";
let str3=`now single`;

console.log(str1,typeof str1);
console.log(str2,typeof str2);
console.log(str3,typeof str3);

//* Multi-line string is possible in template literals

// let str4= 'i am
// singlequotes';   //❌ Invalid or unexpected token

// let str5 =" i am
// doublequotes";  //❌ Invalid or unexpected token

let str6=`i am
template literals or backtick`; //✅

// console.log(str4)
// console.log(str5)
console.log(str6);

//* Access the variable within the template literals

let n1=50;
let n2=100;

// let res1='sum of n1 and n2 ';
// let res2="sum of n1 and n2";
let res3=`sum of ${n1} and ${n2}`;

let res4=`sum of ${n1} and ${n2} is ${n1+n2}`
let res5=`difference of ${n1} and ${n2} is ${n1-n2}`

// console.log(res1);
// console.log(res2);
console.log(res3)
console.log(res4)
console.log(res5)


//--------------------------------------------------


