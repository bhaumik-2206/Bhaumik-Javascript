// import logo from './logo.svg';
// import './App.css';
import Hello from "./new";
// import React, { useState } from 'react';
export function App() {
  return (
    <div>
      <Hello />
      <h1>Hello World!</h1>
    </div>
  );
}
// export function NavigationBar() {
//   return (
//     <ul>
//       <li><a uref="#">Home</a></li>
//       <li><a uref="#">About Us</a></li>
//       <li><a uref="#">Contact</a></li>
//       <li><a uref="#">Log In</a></li>
//     </ul>
//   )
// }
// export function Hello2() {
//   return <h1> This is Function 2</h1>;
// }

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   const decrementCount = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );

//   // const decrementCount = () => {
//   //   if (count > 0) {
//   //     setCount(count - 1);
//   //     setMessage('');
//   //   } else {
//   //     setMessage('Count cannot be less than 0');
//   //   }
//   // };
//   // return (
//   //   <div>
//   //     <p>Count: {count}</p>
//   //     {message && <p>{message}</p>}
//   //     <button onClick={incrementCount}>Increment</button>
//   //     <button onClick={decrementCount}>Decrement</button>
//   //   </div>
//   // );

//   // if (count >= 0) {
//   //   return (
//   //     <div>
//   //       <p>Count: {count}</p>
//   //       <button onClick={incrementCount}>Increment</button>
//   //       <button onClick={decrementCount}>Decrement</button>
//   //     </div>
//   //   );
//   // } else {
//   //   return (
//   //     <div>
//   //       <p>Count: {count}</p>
//   //       <p>You can not decrement not</p>
//   //       <button onClick={incrementCount}>Increment</button>
//   //       <button onClick={decrementCount}>Decrement</button>
//   //     </div>
//   //   );
//   // }
// }

// export default function Counter() {
//   let count = 0;
//   function incrementCount() {
//     console.log(count)
//     count++;
//   }
//   function decrementCount() {
//     console.log(count)
//     count--;
//   }
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );
// }


// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrementCount() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.incrementCount()}>Increment</button>
//         <button onClick={() => this.decrementCount()}>Decrement</button>
//       </div>
//     );
//   }
// }
// export default Counter;


// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];
// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }



// import React, { useState } from 'react';
// function App() {
//   const [content, setContent] = useState('Initial Content');    // Set Initial Content
//   const handleChangeContent = () => {
//     setContent('New Content');      // Set New Content
//   };
//   return (
//     <div>
//       <h1>{content}</h1>
//       <button onClick={handleChangeContent}>Change Content</button>
//     </div>
//   );
// }
// export default App;



// import React from 'react';
// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Clicked {this.state.count} times
//       </button>
//     );
//   }
// }
// export default Button;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (input.trim() !== '') {
//       setTodos([...todos, input]);
//       setInput('');
//     }
//   };

//   const removeTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };
//   console.log(todos)
//   console.log(input)

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;