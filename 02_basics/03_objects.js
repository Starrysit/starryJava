// singleton 
// object.create 

// object literals 

const mySymbol = Symbol("key");

const jsUser = {
    name: "shaurya",
    [mySymbol]: "myKey1",
    age: 100,
    location: "jaipur",
    email: "[EMAIL_ADDRESS]",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]


}
// console.log(jsUser.isLoggedIn);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser[mySymbol]);


jsUser.email = "shaurya.223@gmail.com"
// Object.freeze(jsUser);

jsUser.email = "shaurya.chatgpt.com";
console.log(jsUser)

jsUser.greeting = function () {
    console.log("hello JS user");
}

jsUser.greeting2 = function () {
    console.log(`hello JS user ${this.name} and my email is ${this.email}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





