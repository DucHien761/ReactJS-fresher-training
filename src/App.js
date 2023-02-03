import logo from "./logo.svg";
import "./App.css";
//Tính chất hoisting: nghĩa là dù KHAI BÁO ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.(Exp1)
function App() {
  var times = 5;
  console.log(test1) // Exp1: Output is "test1 is undefined"
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

  const test = () => {
    if (times > 3) {
      test1 = "hello";
      let test4 = "hey test4";
    }
    console.log(test1); // "hello"
    console.log(test2); // "hey test2"
    console.log(test3); // "hey test3"
    //console.log(test4); //  'test4' is not defined because test4 is declared with let in a blocked scope 
  };

  return (
    <div className="App">
      <button onClick={test}>Submit</button>
    </div>
  );
}

export default App;
