// Loops - for, for-in, for-of, while, do-while, for-each

// --------- for loop : loops through a block of code a number of times ----------- //

const fruits = ['apple', 'mango', 'pineapple'];

for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// -------- for-in : loops through the properties of an object -------------- //

for(let fruit in fruits){
    console.log(fruit); // index
    console.log(fruits[fruit]); // object[index]
}

// -------- for-of : loops through the values of an iterable object -------------- //

for(let fruit of fruits){
    console.log(fruit);
}

function Range(n){
    const array = new Array();
    for(let i = 0; i < n; i++){
        array.push(i);
    }
    return array;
}

let num = Range(5);
console.log(num);

for(let i of Range(10)){
    console.log(i);
}

// ------------ while loop : loops through a block of code while a specified condition is true --------- //

let num_1 = 10;
while (num_1 > 0){
    console.log(num_1);
    num_1--;
}

// --------------- do while : loops through a block of code while a specified condition is true ----------- //

let num_2 = 5;
do{
    num_2 ++;
    console.log(num_2);
}while(num_2 < 10); // pre

do{
    console.log(num_2);
    num_2 ++;
}while(num_2 < 10); // post