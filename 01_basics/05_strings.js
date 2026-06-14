// const name = "shaurya"
// const repocount = 1000

// // console.log(name + repocount + "value" );

// console.log(`my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('shaurya');

// console.log(gameName[0]);
// console.log(gameName.__proto__);  
// console.log(gameName.length);
// console.log(gameName.toUpperCase());    
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString); 

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const thirdString = gameName.replace('shaurya', 'shaurya is a good boy');
console.log(thirdString);

console.log(thirdString.trim());

const url = "https://www.youtube.com/watch?v=abc123";
console.log(url.replace('watch?v=', 'embed/'));


