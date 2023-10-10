// Data types - primitive, non-premitive(Object)

// --- Premitive Data Types -------- //

// numbers - integer, decimal/floating point

let age = 25; // integer
let previousAge = Number();

previousAge = 15.5; // floatinnng-point

console.log(age);
console.log(typeof age);
console.log(previousAge);
console.log(typeof previousAge);

// boolean - true, false

let isLogged = true;
let isNotLogged = Boolean();
isNotLogged = false;

console.log(isLogged);
console.log(typeof isLogged);
console.log(isNotLogged);
console.log(typeof isNotLogged);

// undefined - undefined

let weDefined;

console.log(weDefined);
console.log(typeof weDefined);

// null - null

let segrigated = null;
let segrigated_1 = false;

console.log(segrigated);
console.log(typeof segrigated);
console.log(segrigated_1);
console.log(typeof segrigated_1);

// string

let name = "Sri Rama krishna Datta"; 
let firstName = String();

firstName = "Movva";

console.log(name);
console.log(typeof name);
console.log(firstName);
console.log(typeof firstName);

// Bigint

let bigNumber = 1234565576553873872743581165565165165165465156611; // with out data type
let bigNumber_1 = BigInt(1234565576553873872743581165565165165165465156611);
let bigNumber_2 = 1234565576553873872743581165565165165165465156611n;

console.log(bigNumber);
console.log(typeof bigNumber);
console.log(bigNumber_1);
console.log(typeof bigNumber_1);
console.log(bigNumber_2);
console.log(typeof bigNumber_2);

// symbol

let symb = Symbol();
symb = name;

console.log(symb);
console.log(typeof symb);

// ------------ Non-Premitive Data Types (Object) ------------- //

// Array

const array = new Array();
array.push(["Array1", "Array2", "Array3", "Array4"]);

console.log(array);
console.log(typeof array);

const array_1 = [];
array_1.push("Array");

console.log(array_1);
console.log(typeof array_1);

// Objects

const object = {
    "object_title" : "object_description",
    "object_subtitle" : "object_sub-description",

    object_sub : {
        object_sub_title : "object_sub_description",
    }
}

console.log(object);
console.log(typeof object);

// Date

const date_today = Date();
const some_day = Date("2020-02-20");

console.log(date_today);
console.log(typeof date_today);
console.log(some_day);
console.log(typeof some_day);