let marks=99;

switch(true){

    case marks>=90 && marks<=100:
        console.log("Your grade is o");
        break;
    case marks>=80 && marks<90:
        console.log("Your grade is a+");
        break;
    case marks>=70 && marks<80:
        console.log("Your grade is a");
        break;
    case marks>=60 && marks<70:
        console.log("Your grade is b+");
        break;
    case marks>=50 && marks<60:
        console.log("Your grade is b");
        break;
    case marks>=40 && marks<50:
        console.log("Your grade is c");
        break;
    default:
        console.log("better luck next time")
}