
const user = {
    username: "shaurya",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);


    }

}
// user.welcomeMessage()
user.username = "sam"
console.log(this);
user.welcomeMessage()

// console.log(this);

function chai() {

}



