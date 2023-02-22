//---------Array.prototype.concat(): The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//---------Array.prototype.entries(): The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
//--------Array.prototype.filter(): The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
const result1 = words.filter(words =>words.includes("e"))
console.log(result);// Expected output: Array ["exuberant", "destruction", "present"]
console.log(result1); // Expected output:  Array ["elite", "exuberant", "destruction", "present"]

//--------Array.prototype.some(): The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const items = [
    {
        name: "book",
        price: 120
    },
    {
        name: "car",
        price: 1000
    },
    {
        name: "house",
        price: 12000
    },
    {
        name: "bike",
        price: 300
    },
    {
        name: "cake",
        price: 50
    }
]
const testSome = items.some((item) => {
  return  item.price < 70
})
const testSome1 = items.some((item) => {
    return  item.price < 20
  })
console.log(testSome); // true
console.log(testSome1); // false

//-------------Array.prototype.every(): The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
const isAboveThreshold = (currentValue) => currentValue > 30;
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
console.log(array1.every(isAboveThreshold));
// Expected output: false

//-------------Array.prototype.map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const items = [
    {
        name: "book",
        price: 120
    },
    {
        name: "car",
        price: 1000
    },
    {
        name: "house",
        price: 12000
    },
    {
        name: "bike",
        price: 300
    },
    {
        name: "cake",
        price: 50
    }
]

const testMap = items.map((item) => {
    return item.name
})

console.log(testMap) //Expected output: ["book", "car", "house", "bike", "cake"] 
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

//---------Array.prototype.every(): The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const test = (currentValue) => currentValue > 20;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(test));
// Expected output: true

//---------Array.prototype.fill(): The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


// Array.prototype.reduce(): The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const numbers = [56, 1, 2, 3];

numbers.reduce(function (accumulator, currentItem) {
  return accumulator - currentItem;
});

// The invocation above will return: 50
const numbers = [10, 20, 30, 40];

numbers.reduce(function (accumulator, currentItem, index) {
  console.log(`The current item (${currentItem}) is on index ${index}`);
  return accumulator + currentItem;
}, 500);

// The invocation above will return:
// "The current item (10) is on index 0"
// "The current item (20) is on index 1"
// "The current item (30) is on index 2"
// "The current item (40) is on index 3"
// 600
const nestedArrays = [
    [20, 30],
    ["Code", "Sweetly"],
    [true, "Grace"],
  ];
  
  nestedArrays.reduce(function (accumulator, currentItem) {
    return [...accumulator, ...currentItem];
  }, []);
  
  // The invocation above will return:
  [20, 30, "Code", "Sweetly", true, "Grace"];

  // Array.prototype.slice(): The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

  const fruits = ['banana', 'apple', 'orange', 'cherry', 'mango'];

  let citrus = fruits.slice(1, 3); // citrus = ['apple', 'orange']