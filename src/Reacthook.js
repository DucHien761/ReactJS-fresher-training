//---- React hook -----
// useEffect is a React Hook that lets you synchronize a component with an external system.
// Syntax: 
// useEffect(setup, dependencies?)
// Case1: Trigger useEffect the first time when component render
// Exp1: Call api
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch data from API
    async function fetchData() {
      const response = await fetch('https://example.com/api/data');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  // Show data
  return <div>{data ? data.message : 'Loading...'}</div>;
}
// Case2: Trigger useEffect when dependency changed
// Exp:


function MyComponent() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
   
    async function fetchData() {
      const response = await fetch(`https://example.com/api/search?q=${query}`);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [query]); // "query" is the dependency

 
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {data ? data.results.map(result => <div key={result.id}>{result.title}</div>) : 'Loading...'}
    </div>
  );
}

// Case3: Handling clean-up tasks when component unmount
// Exp:


function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Handling asynchronous tasks and register clean-up functions
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 100

// 2. useMemo : useMemo is a hook that allows you to memoize expensive computations so that they are only re-computed when necessary.
// useMemo hook takes two arguments: a function that returns a value, and an array of dependencies.

import React, { useMemo } from 'react';

function MyComponent(props) {
  const { a, b } = props;

  const result = useMemo(() => {
    // Expensive computation
    return a * b;
  }, [a, b]);

  return <div>{result}</div>; // "result" variable is memoized
}

// ====> useMemo to solve performance problem

// 3. UseRef provides a way to store a mutable value in a component and useRef does not cause a re-render of the component

// case1: Accessing DOM -- use useRef to get a reference to a DOM element and interact with it directly

function MyComponent() {
    const inputRef = useRef(null);
  
    const handleClick = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }

// case2: Storing a value
// Exp:
function MyComponent() {
    const counterRef = useRef(0);
  
    const handleClick = () => {
      counterRef.current += 1;
      console.log(counterRef.current);
    };
  
    return (
      <div>
        <p>Counter: {counterRef.current}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

// case3: Storing a previous value to compare with its value
// Exp:
function MyComponent() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(); // prevCountRef is a reference to the previous value of the count state
  
    useEffect(() => {
      prevCountRef.current = count; //  update the current property of the prevCountRef
    }, [count]);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCountRef.current}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

