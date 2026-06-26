let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    let c = 30;
    // console.log("INNER: ", a);
}
// console.log("OUTER: ", a);

////////////////////////////////////////////////////////////////

function one() {

    const username = "shaurya";

    function two() {
        const website = "youtube";
        //     console.log(username);
        // }
        // console.log(website);
        two()
    }
    // one()

    if (true) {
        const username = "shaurya";
        if (username == shaurya) {
            const website = "youtube"
            // console.log(username + website);
        }
        // console.log(website);

    }
    // console.log(username);

}

////////////////// Interesting /////////////////////

function addone(value) {
    return num + 1

}
addone(5)

const addTwo = function (num) {
    return num + 2

}
addTwo(5);
