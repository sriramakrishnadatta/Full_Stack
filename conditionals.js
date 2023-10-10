// conditional statements - if, if-else, if-else if-else

let age = 30;

// ----- if statement ------ //

if (age > 18){
    console.log("you are not eligible for voting!!");
}

// ------ if-else statement ------- //

if (age < 18){
    console.log("You are not a major !!");
}else{
    console.log("You are a major !!");
}

// -------- if - else if - else --------- //

if (age < 20){
    console.log("your age is less than",age);
}else if(age > 20){
    console.log("your age is greater than",age);
}else{
    console.log("your age is", age);
}

// ------ switch statement -------- //

let day = "Tuesday";

switch (day){
    case "Monday": 
        console.log(day);
        break;
    case "Tuesday":
        console.log(day);
        break;

    default:
        console.log("Default Message!!");
}