import logo from "./logo.svg";
import "./App.css";

function App() {
  var times = 5;
  var test1 = "hey test1";
  let test2 = "hey test2";
  const test3 = "hey test3";
  // Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.
  const greeting = {
    message: "Hello",
    number: "five",
  };

  greeting.message = "say Hello instead";
  console.log(greeting);
  // {message:"say Hello instead",number:"five"}

  const test = () => {
    let test2 = "hey hien";
    if (times > 3) {
      test2 = "say Hi";
      test1 = "hello";
      let test4 = "hey test4";
    }
    console.log(test1);
    console.log(test2);
    console.log(test3);
    //console.log(test4); //  'test4' is not defined because test4 in a blocked scope
  };

  return (
    <div className="App">
      <button onClick={test}>Submit</button>
    </div>
  );
}

export default App;
