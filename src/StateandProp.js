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

// Update state in function component
this.setState({
    name : 'Hien Duc'
})

// Update state in function component with useState
setCount(1); // count = 1

/*Lifecycle of Components
A React component undergoes three phases in its lifecycle: mounting, updating, and unmounting. */
// In class component ( stateful component ) we can declare and use state
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		this.setCount = this.setCount.bind(this);
	}

	setCount() {
        this.setState({count: 1}); // update state 
		this.setState({count: this.state.count + 1}); 
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<button onClick={this.setCount}>Click to add</button> 
				<p>Count: {this.state.count}</p>
			</div>
		)
	}
}

// In function component (stateless component) React hooks empowered developer to access state from functional component.
function MyInput(props) {
	const [input, setInput] = useState('');

	return (
		<input
			value={input}
			onChange={e => setInput(e.target.value)} // update state in function you use setInput ...
		/>
	)
}
