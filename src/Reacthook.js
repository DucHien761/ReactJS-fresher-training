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

//3. useContext: is a hook that allows components to consume data from a context .
// Exp:
import React, { useState } from 'react';
import { ThemeProvider } from './themeContext';
import Header from './Header';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Header />
        // other components
      </div>
    </ThemeProvider>
  );
}

// Header.js

import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </header>
  );
}

// themeContext.js

import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// Exp: 
import React, { useContext } from 'react';

// Create a new context
const MyContext = React.createContext();

// Create a component that uses the context
function MyComponent() {
  // Use the useContext hook to access the context
  const contextData = useContext(MyContext);

  return (
    <div>
      <h1>{contextData.title}</h1>
      <p>{contextData.description}</p>
    </div>
  );
}

// Use the context provider to wrap the component tree
function App() {
  const contextValue = {
    title: 'My App',
    description: 'This is an example of how to use the useContext hook.'
  };

  return (
    <MyContext.Provider value={contextValue}>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;