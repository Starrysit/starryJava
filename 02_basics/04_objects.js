const tinderUser = new Object();

tinderUser.id = "123"
tinderUser.name = "shaurya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shaurya",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "hitesh@gmail"
    },

    {
        id: 1,
        email: "hitesh@gmail"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

// course.courseInstructor

const { courseInstructor: Instructor } = course

console.log(Instructor);

// {
//  name: "shaurya",
//  courseName: "Js",
//  price: "free"


// }





