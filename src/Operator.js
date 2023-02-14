// 1.Rest Operator
// The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.
// Syntax : ...yourValues
// In JavaScript functions, rest gets used as a prefix of the function’s last parameter.
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
/* The rest operator (...) instructs the computer to add whatever otherInfo (arguments) supplied by the user into an array. Then, assign that array to the otherInfo parameter.

As such, we call ...otherInfo a rest parameter.
*/
//Cannot Use “use strict” Inside a Function Containing a Rest Parameter
// Define a function with one rest parameter:
function printMyName(...value) {
    "use strict";
    return value;
  }
  
  // The definition above will return:
  "Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list"
//You can write the “use strict” directive outside the function.
// Define a “use strict” directive outside your function:
"use strict";

// Define a function with one rest parameter:
function printMyName(...value) {
  return value;
}

// Invoke the printMyName function while passing two arguments to its parameters:
printMyName("Oluwatobi", "Sofela");

// The invocation above will return:
["Oluwatobi", "Sofela"]
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"] // C in alphabert

  //The rest operator (...) instructs the computer to add the rest of the user-supplied values into an array. Then, it assigns that array to the otherInfo variable.As such, you may call ...otherInfo a rest variable.
  // Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
    firstName: "Oluwatobi",
    lastName: "Sofela", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
  }
  
  // Invoke the otherInfo variable:
  console.log(otherInfo);
  
  // The invocation above will return:
  {companyName: "CodeSweetly", profession: "Web Developer", gender: "Male"}
// 2.Spead Operator -----------------------------------------------
//The spread operator (...) helps you expand iterables into individual elements.
// Spread in Array
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// The invocation above will return:
[ "Oluwatobi", "Sofela", "is", "my", "name." ]

// The snippet above used spread (...) to copy the myName array into aboutMe.
// Exp1: Use Spread to Convert a String into Individual Array Items
const myName = "Oluwatobi Sofela";

console.log([...myName]);

// The invocation above will return:
[ "O", "l", "u", "w", "a", "t", "o", "b", "i", " ", "S", "o", "f", "e", "l", "a" ]
// Exp2: How the Spread Operator Works in a Function Call
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
// 16

//Exp3: How Spread Works in an Object Literal
const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, runs: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
{ 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }