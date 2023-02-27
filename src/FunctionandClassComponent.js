import { useState } from "react";
// Function component and class component
// 1. Class component ( Stateful component)
// Declare class component
class ClassComp extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>; // use this. to pass props in class component
    }
    }
// Declare function component : Function Components are defined as JavaScript functions, while Class Components are defined as ES6 classes.

function FunctionComp() {
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default App


// Use state in class component
export default class ClassComponent extends Component {
    constructor(props)
    super(props);

    this.state = {
        name: "",
        age: 23,
        isMale: true,
    };
}
render(){
    return (
        <div>
        <h1> My name is {name} </h1>
        <h2> Age: {age}</h2>
        <h3> Is {isMale ? "Male" : "Female"}</h3>
        <h4> My address : {props.address} </h4>
    </div>
    )
}

// Use state in function component

function App(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(10);
    const [isMale, setIsMale] = useState(true);

    return(
        <div>
            <h1> My name is {name} </h1>
            <h2> Age: {age}</h2>
            <h3> Is {isMale ? "Male" : "Female"}</h3>
            <h4> My emotion : {props.emotions} </h4>
        </div>
    )
}

