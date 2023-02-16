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
const job = ["Duc", "Hien", ["js", "react"]];

function getUserBio([firstName, lastName]) {
  return `My name is ${firstName} ${lastName}.`;
}
function getUserProfile([firstName, lastName, [job]]) {
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

// Use Object Destructuring to Assign the Rest of an Object to a Variable
const { firstName, ...otherInfo } = {
  firstName: "Duc",
  lastName: "Hien",
  job: "react",
};

console.log(firstName); // "Duc"
console.log(otherInfo); // {lastName: "Hien", website: "react"}

// Setting a default value can be handy when the value you wish to extract from an object does not exist (or is set to undefined)
const { firstName = "Duc", job = "react" } = {
  firstName: "Duc",
};

console.log(firstName); // "Duc"
console.log(job); // "react"

// Use the object destructuring to swap the values

let firstName = "Duc";
let lastName = "Hien";

({ firstName, lastName } = { firstName: lastName, lastName: firstName });

console.log(firstName); // "Hien"
console.log(lastName); // "Duc"

// Use Object Destructuring to Extract Values from Properties to a Function's Parameters
const profile = {
  firstName: "Duc",
  lastName: "Hien",
  job: {
    job1: "javascript",
    job2: "react",
  },
};

// Define a function with one destructuring object containing two parameters:
function getUserBio({ firstName, lastName }) {
  return `My name is ${firstName} ${lastName}.`;
}

getUserBio(profile); // "My name is Duc Hien."

function getUserJob({ firstName, lastName, job: { job1: temp1 } }) {
  return `${firstName} ${lastName} work with ${job}.`;
}

getUserBio(profile); // "Duc Hien work with javascript"
