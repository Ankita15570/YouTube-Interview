// ReactJs Developer Interview No-3
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// What are the future of react ?
// The future of React is bright, marked by its continued dominance in frontend development, ongoing innovations in performance with server components and concurrent rendering, and growing adoption in AI/ML, Web3, and serverless applications.
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// One way data binding ?
// One-way data binding is a data flow where information moves in a single direction, usually from a data source (like a component's state) to the user interface (view) or from a parent component to a child component via props.
// __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Difference between virtual DOM and real DOM ?
// Aspect               Real DOM                              Virtual DOM
// Definition           Browser’s actual DOM                  Lightweight JavaScript copy of the DOM
//                      representation                        Faster due to diffing and batching
// Performance          Slower due to direct
//                      manipulation
//  Updates             Immediate, triggers                   Batched, minimal updates via diffing
//                      reflows/repaints
// Memory               Browser-managed, no extra overhead    Extra memory for JavaScript object
// Use Case             Simple, static pages                  Dynamic, interactive applications
// Example Frameworks   Vanilla JS, jQuery                    React, Vue
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Reactjs is framework or library ? //library
// ReactJS is a JavaScript library for building user interfaces.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// what is use of es6 in reactjs ?
// ES6 (ECMAScript 2015) introduced numerous features that significantly enhance the development experience in React.js, making code cleaner, more efficient, and easier to manage. Here's how ES6 is used in React:
// Classes for Component Definition: ES6 classes provide a more structured and object-oriented way to define React components, especially class components, using the class keyword with extends React.Component. This offers clear encapsulation of component state and lifecycle methods.
// Arrow Functions: Arrow functions (=>) are widely used in React for concise function definitions, particularly for event handlers and callback functions. They also handle the this keyword differently than regular functions, binding this lexically to the surrounding context, which simplifies handling this within class components.
// Destructuring: Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables. In React, this is frequently used to extract props or state values, making the code more readable and reducing repetitive access to object properties.
// Template Literals: Template literals (using backticks `` ` ``) enable easier string interpolation and multi-line strings. They are useful for constructing dynamic strings in JSX and for creating more readable string-based content.
// Spread Operator (...): The spread operator is used for copying arrays, creating new arrays from existing ones, and passing props to components. It allows for concisely spreading the properties of an object or elements of an array into another object or array.
// let and const: These keywords provide block-scoped variable declarations, offering improved control over variable scope compared to var. const is particularly useful for declaring variables that should not be reassigned, promoting immutability in React state and props.
// Modules (Import/Export): ES6 modules (import and export) facilitate code organization and reusability. They allow developers to break down React applications into smaller, manageable components and functions, importing them where needed and exporting them for use in other files.
// Default Parameters: Default parameters in function definitions allow setting default values for function arguments if no value is provided during the function call. This can be useful for providing fallback values for props or other function parameters.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// what are the different  part of component in Reactjs ?
// React components, whether functional or class-based, are fundamentally building blocks of a user interface and share common conceptual parts:
// Props (Properties):
// Props are read-only inputs that components receive from their parent components. They are used to pass data down the component tree, allowing for customization and data flow.
// State (for stateful components):
// State is an object that holds data specific to a component and can change over time. It allows components to manage their own internal data and re-render when that data changes. Functional components achieve this using Hooks like useState.
// JSX (JavaScript XML):
// JSX is a syntax extension for JavaScript that allows writing HTML-like markup directly within JavaScript code. It is used to describe the structure and appearance of the component's UI.
// Component Logic:
// This refers to the JavaScript code within the component that handles data manipulation, event handling, and any other logic required for the component's functionality. In functional components, this logic often involves Hooks like useEffect for side effects.
// Return Value (Rendered Output):
// Every React component must return a React element (or a collection of them) that describes what should be rendered to the DOM. This is typically achieved by returning JSX
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// What is the difference between functional and class component ? // better?
// Aspect                  Functional Component                             Class Component
// Syntax                  Plain function, returns JSX                      Class extending React.Component, render method
// State Management        useState, useReducer (Hooks)                     this.state, this.setState
// Lifecycle Methods       useEffect for side effects                       componentDidMount, etc.
// Performance             Lighter, optimized by React Compiler             Heavier, less optimized
// Readability             Concise, no this binding                         Verbose, requires binding
// Use of this             None, uses function scope                        Heavy reliance on this
// Community Preference    Modern standard, Hooks-based                     Legacy, used in older codebases
// Best For                New projects, modern React                       Legacy code, specific lifecycle needs
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Explain Nodejs ?
// Definition: Node.js is a runtime that lets you run JavaScript on servers to build scalable, high-performance applications, such as web servers, APIs, or real-time apps.
// Purpose: It extends JavaScript beyond browsers, enabling developers to create full-stack applications (both frontend and backend) using a single programming language.
// Release: First released in 2009 by Ryan Dahl, it has grown into a widely adopted technology for building modern web applications.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// What is the function useState in reactjs ?
// In React.js, the useState function is a Hook that allows functional components to manage state. It enables you to add state variables to your component, which can be updated, triggering a re-render of the component when the state changes.
// useState is called inside a functional component to declare a state variable and its corresponding updater function.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// What is the Difference between controller and uncontrolled component ?
// Aspect                       Controlled Component,                                   Uncontrolled Component
// State Management             Input value is stored in React state.,                  Input value is stored in the DOM.
// Value Access                 "Via state variable (e.g., inputValue).",               "Via ref (e.g., inputRef.current.value)."
// Event Handling               Requires onChange to update state.,                     No onChange needed unless for specific logic.
// Real-time Control            Easy to validate/manipulate input in real-time.,        Limited real-time control; values accessed on demand.
// Code Complexity              More code (state + event handlers).,                   "Less code, simpler setup."
// Performance                  May cause re-renders on every change.,                  "Fewer re-renders,potentially better for large forms."
// Use Case,                   "Forms needing validation, formatting, or UI sync.",     Simple forms or when integrating with non-React code.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// What is the prop drilling in react?
// Prop drilling is the process of passing props through multiple component layers to reach a nested child, often leading to verbose and hard-to-maintain code.
// It can be avoided using Context API, state management libraries, component composition, or custom Hooks.
// Choose the solution based on your app’s complexity: Context or composition for medium-sized apps, and state management libraries for large-scale apps.
// Prop drilling in React refers to the process of passing data (props) from a parent component to a deeply nested child component through multiple intermediate components, even if those intermediate components don’t directly use the data. This can make the codebase harder to maintain, especially in large applications with deeply nested component trees.
// In React, data flows unidirectionally from parent to child components via props.
// When a deeply nested child component needs data from a top-level parent, the parent must pass the data through every intermediate component in the tree, regardless of whether those components use the data.
// This passing of props through multiple layers is called prop drilling.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Custom hooks ?
// A custom hook is a function that leverages React Hooks to handle specific logic, such as fetching data, managing form state, or subscribing to events.
// They don’t render UI but instead return values (state, functions, etc.) that components can use.
// Custom hooks enable you to reuse logic across components without duplicating code or relying on prop drilling.
// How it works: The useInput custom hook manages the state of an input field and provides the value, a change handler, and a reset function. This logic can be reused for any input field.
// When you notice repeated logic in multiple components (e.g., form handling, API calls).
// When you want to simplify components by extracting stateful logic.
// When integrating with external systems (e.g., browser APIs, third-party libraries).
// To make logic reusable across projects or components.
// Custom hooks are a powerful way to encapsulate and reuse stateful logic in React functional components. By leveraging React’s built-in Hooks, they help keep your code DRY (Don’t Repeat Yourself), modular, and easier to test. They’re especially useful for handling common patterns like form management, data fetching, or browser API interactions,
// and they integrate well with other React features like Context to avoid prop drilling.
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// How to pass data between components ? //beteer redux
// Passing data between components depends on the relationship between them and the framework being used (e.g., Angular, React, Vue).
// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// React Router Works?
// React Router provides client-side routing for React applications, enabling navigation between different views or "pages" without requiring a full page reload from the server. It achieves this by synchronizing the user interface with the browser's URL.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
