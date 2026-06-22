//* -------------------Array-------------------

let ipl=["csk","rcb","gt","lsg","kkr","srh","rr","mi"]

//!accessing entire array

console.log(ipl)

//! Accessing single element in array

console.log(ipl[0])
console.log(ipl[1])
console.log(ipl[2])
console.log(ipl[3])
console.log(ipl[4])
console.log(ipl[5])
console.log(ipl[6])
console.log(ipl[7])

console.log(ipl[-2]) //undefined

//!how to know the length of the array
console.log(ipl.length)  //8

console.log("------------------------")

let fruit=["apple","banana","dragon fruit","gova","jackfruit","lemon","mango","orange","pomogranet"]
console.log(fruit.length); // here  length is a property (not a method)

console.log("---------------------------------")

//*----------------Object---------------------
let anime={
    name:"naruto",
    age:36,
    place:"leaf village",
    position:"hokage",
    father:"minato"
}
console.log(anime);
console.log(anime.name);
console.log(anime.age)


console.log("------------")
let profile={
    name:"sriharini",
    degree:"B.Tech",
    stream:"IT",
    cgpa:88,
    passout:2026,
    
}
console.log(profile);
console.log(profile.name);
console.log(profile.degree);

console.log("-----------------------------------")


let product=[
    {
        product_name:"laptop",
        product_price:89000,
        brand:"dell"
    },
    {
        product_name:"phone",
        product_price:90000,
        brand:"samsung"
    },
    {
        product_name:"camera",
        product_price:7000,
        brand:"cameron"
    },
    {
        product_name:"watch",
        product_price:500000,
        brand:"rolex"
    }
]


console.log(product[2].product_name);
console.log(product[1])
console.log(product[1].phone)

console.log("---------------------------------------")

let a=product.map((ele)=>{
    return ele.product_name.concat("hello");
   
})
console.log(a);
console.log(typeof(product[1].product_name));
console.log(typeof(product[1].product_price));

console.log("--------------------------------------")

//*-------------------function--------------------------

function add(a,b){
    console.log("addition is :",a+b);
     
}
add(30,40)

function sub(a,b){
    console.log("subtraction is :",a-b);
     
}
sub(300,40)
function mul(a,b){
    console.log("multiplication is :",a*b);
     
}
mul(30,40)