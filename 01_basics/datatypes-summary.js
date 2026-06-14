// Primitive Datatypes 

// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol

// Non-Primitive Datatypes

// 1. Object
// 2. Array
// 3. Function  



const name = "shaurya"
const age = 23
const isLoggedIn = false
const state = null
let city;
const id = Symbol("123")

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof city);
console.log(typeof id);     


// ---------------------------------------------


// non primitive types examples 

const heros = ["shaktiman", "doga", "krish", "john wick"]
let myObj = {
    name : "shaurya",
    age : 23,
    isLoggedIn : false
}

function myFunc(){
    console.log("hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunc);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory and heap memory

// stack memory ( primitive datatypes ) and heap memory ( non primitive datatypes )

// when we assign a primitive datatype to a variable,
// it is stored in stack memory and when we assign a non primitive datatype to a variable, 
// it is stored in heap memory.

// when we copy a primitive datatype to another variable,
// it creates a new copy of the value in stack memory and 
// when we copy a non primitive datatype to another variable, 
// it creates a reference to the same object in heap memory.

let myyoutubeName = "shaurya"
let anothername =  myyoutubeName
anothername = "starrysith"

console.log(myyoutubeName);
console.log(anothername);

let userone = {
    email : "shaurya.gmail.com",
    upi : "shaurya@okhdfcbank"

}
let usertwo = userone
usertwo.email = "hitesh@gmail.com"

console.log(userone.email);
console.log(usertwo.email); 


