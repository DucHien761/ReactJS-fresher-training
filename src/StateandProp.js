// 1.Props
// - Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.

import { useState } from "react";

// --- Exp:
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Duc Hien" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  // - Use prop to pass data to component - React call Welcome component with {name="Duc Hien"} as the prop
  // Welcome function return a <h1>Hello, {props.name}</h1> element
  // React DOM updates the DOM match " Hello, Duc Hien"


  // Exp:
  function sum(a, b) {
    return a + b;
  }
    // - Shouldn't change the props because they do not attempt to change their inputs, and always return the same result for the same inputs.


  // Exp: We can render component Welcome many times
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Duc Hien" />
        <Welcome name="Hien Vo" />
        <Welcome name="Hien" />
      </div>
    );
  }
// 2.State
// The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
// initializing a state : ( in class component)
this.state = { name : 'Duc Hien' }
console.log(this.state.name) //Duc Hien
// initializing a state : ( in function component with useState)
const [count, setCount] = useState(0)