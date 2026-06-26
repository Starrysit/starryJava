
// function sayMyName() {
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("U");
//     console.log("R");
//     console.log("Y");
//     console.log("A");
// }

// sayMyName()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // console.log("shaurya");
    // return result

    return number1 + number2;
}


const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username) {

    return `${username} just logged in`
}

// console.log(loginUserMessage("shaurya"))
console.log(loginUserMessage("shaurya"))

///////////////////////////////////////////////////////////////

function CalculateCartPrice(...num1) {
    return num1;
}

// console.log(CalculateCartPrice(200, 400, 500, 600));

const user = {

    username: "shaurya",
    price: 199

}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user);
handleObject({
    username: "shaurya",
    price: 199
})

