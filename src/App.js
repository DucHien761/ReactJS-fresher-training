import logo from "./logo.svg";
import "./App.css";
//Tính chất hoisting: nghĩa là dù KHAI BÁO ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.(Exp1)
function App() {
  var times = 5;
  console.log(test1); // Exp1: Output is "test1 is undefined" && Chỉ có phần khai báo được đưa lên top, không phải phần gán giá trị ===> undefined (hoisting)
  var test1 = "hey test1";
  let test2 = "hey test2";
  const test3 = "hey test3"; //không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến const

  // Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.
  const greeting = {
    message: "Hello",
    number: "five",
  };

  greeting.message = "say Hello instead";
  console.log(greeting);
  // {message:"say Hello instead",number:"five"}

  const test = (param) => {
    if (times > 3) {
      test1 = "hello";
      let test4 = "hey test4";
      var test5 = "hey test5";
    }
    console.log(test1); // "hello"
    console.log(test2); // "hey test2"
    console.log(test3); // "hey test3"
    //console.log(test4); //  'test4' is not defined because test4 is declared with let in a blocked scope
    console.log(test5); // "hey test5"
  };
  // Difference between regular function and arrow function
  // 1. Syntax
  // ES5
  var add = function (x, y) {
    return x + y;
  };
  add(5, 5);
  console.log(add(5, 5));
  //ES6
  let add1 = (x, y) => {
    return x + y;
  };
  console.log(add1(5, 5));
  //2.
  let myFunc = {
    showArgs() {
      console.log(arguments);
    },
  };
  myFunc.showArgs(1, 2, 3, 4);
  //3. Use of this keyword
  let me = {
    name: "Ashutosh Verma",
    thisInArrow: () => {
      // console.log("My name is " + this.name); // no 'this' binding here
    },
    thisInRegular() {
      console.log("My name is " + this.name); // 'this' binding works here
    },
  };
  me.thisInArrow();
  me.thisInRegular();
  //4. Using new keyword
  let add = (x, y) => console.log(x + y); //error

  new add(2, 3);
  //5. No duplicate named parameters
  return (
    <div className="App">
      <button onClick={test}>Submit</button>
    </div>
  );
}

export default App;
