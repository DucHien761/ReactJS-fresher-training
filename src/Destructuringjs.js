//The object and array literal expressions provide an easy way to create ad hoc packages of data.
const x = [1, 2, 3, 4, 5];
const y = ["a", "b", "c", "d", "e"];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Use rest operator in destructuring
const [y, z, ...rest] = x;
console.log(rest); // 3 4 5

// It's useful for handle array
// exp : like concat 2 array
const concatArray = [...x, ...y];
console.log(concatArray); // [1, 2, 3, 4, 5,"a","b","c","d","e" ]

// Use array destructuring to extract values at any index position of a regular array
const [, , c] = ["a", "b", "c"];

console.log(c); // "c"
// Trick swap variable in array destructuring
let firstName = "Duc";
let lastName = "Hien";

[firstName, lastName] = [lastName, firstName];

console.log(firstName); // "Hien"
console.log(lastName); // "Duc"

// Use Array Destructuring to Extract Values from an array and nested array to a Function's Parameters
const profile = ["Duc", "Hien"];
const job = ["Duc", "Hien",  ["js", "react"]];

function getUserBio([firstName, lastName]) {
  return `My name is ${firstName} ${lastName}.`;
}
function getUserProfile([firstName,lastName , [job]]) {
    return `${firstName} ${lastName} do ${job}`;
  }
getUserBio(profile); // "My name is Duc Hien."
getUserProfile(job); //"Duc Hien do js react"



// Similarly, you can destructure objects on the left-hand side of the assignment.
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
