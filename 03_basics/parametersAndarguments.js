// without parameters 

function greet() {
    console.log("Hello Shaurya");
}

// What if we want to greet anyone?
greet("Shaurya");
greet("Rahul");
greet("Aman");

// For this, we use parameters and arguments.

function greet(name) {
    console.log("hello" + name);
}
greet("shaurya");

// * name → Parameter
// * "Shaurya" → Argument

//**************************************************************************************** */

// Multiple Parameters-:

// function can accept more than one value.

function add(num1, num2) {
    console.log(num1 + num2);
}

add(10, 20);


/////////////////////////////////////////////////////////////

// CONCEPT OF RETURN 

function add(num1, num2) {
    return num1 + num2;
}
let result = add(10, 20);
console.log(result);


// DONE THESE TOPICS In IT. 

/* Argument
   ↓
Parameter
   ↓
Function executes
   ↓
Return value
   ↓
Store in variable OR use directly */

