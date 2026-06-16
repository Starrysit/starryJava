const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "wonderwoman"];

// 1. Using push() (modifies original array in-place, adding the array as an element)

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); 

// 2. Using concat() (returns a new array, does not modify original arrays)

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// // spread operator 
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("shaurya"));
console.log(Array.from("shaurya"));
console.log(Array.from({ name: "shaurya" }));


let score1 = 200;
let score2 = 300;
let score3 = 100;

console.log(Array.of(score1, score2, score3));





