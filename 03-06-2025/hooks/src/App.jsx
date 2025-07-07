import { useState, useEffect, useRef, useContext, createContext } from "react";

// function App() {
//   // hooks
//   const [s1, setDetail] = useState({
//     username: "prakash",
//     location: "Bengaluru",
//   }); //initial data s1 = x20030010 praksh --> ravi
//   console.log("hello");

//   function handleCount() {
//     // console.log(s1.name);
//     // s1.name = "ravi";
//     // console.log(s1.name);

//     setDetail({ username: "Rohan", location: "noida" });
//     console.log(s1);
//   }
//   return (
//     <>
//       <button
//         onClick={() => {
//           setDetail({ username: "Rohan", location: "noida" });
//         }}
//       >
//         Button
//       </button>
//       <br />
//       Count: {s1.username}
//     </>
//   );
// }
// function App() {
//   // hooks
//   let [count, setCount] = useState(0);

//   function handleCount() {

//     setCount(count+1)

//   }
//   return (
//     <>
//       <button
//         onClick={handleCount}
//       >
//         Button
//       </button>
//       <br />
//       Count: {count}
//     </>
//   );
// }

//-============use effect===============

// function App() {
//   const [count, setCount] = useState(0);
//   const [s1, setS1] = useState(0);

//   console.log(count);
//   useEffect(() => {
//     // network request
//     console.log("i am useEffect")
//   }, [count]);

//   return (
//     <>
//       <h1>I have rendered {count} times</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Add 1
//       </button>
//     </>
//   );
// }

// clean up
// function App() {
//   const [count, setCount] = useState(0);

//   console.log(count);
//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount(count + 1);
//     }, 1000);

//     // cleanup
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <h1>I have rendered {count} times</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Add 1
//       </button>
//     </>
//   );
// }

//
// =========useref=====

// function App() {
//   const inputElement = useRef(); //returns object having current propert
//   const passElement  = useRef(); //returns object having current propert

//   function focusInput() {
//     console.log(inputElement.current);
//     console.log(passElement.current);
//     inputElement.current.focus();
//   }

//   return (
//     <>
//       User NAME
//       <input type="text" ref={inputElement} />
//       <br />
//       Password
//       <input type="password" ref={passElement} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   );
// }
// function App() {
//   const [inputValue, SetInputValue] = useState("");
// //   console.log(inputValue)
//   const count = useRef();
//   console.log(count)

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           SetInputValue(e.target.value);
//         }}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// ======================useContext

// problem

// function App() {
//   const [user, setUser] = useState("Bhargavi");
//   return (
//     <>
//       <h1>Hello {user}</h1>
//       <Child1 user={user} />
//     </>
//   );
// }

// function Child1({ user }) {
//   return (
//     <>
//       <div>Child1</div>
//       <Child2 user={user} />
//     </>
//   );
// }
// function Child2({ user }) {
//   return (
//     <>
//       <div>Child2</div>
//       <Child3 user={user} />
//     </>
//   );
// }
// function Child3({ user }) {
//   return (
//     <>
//       <div>Child3</div>
//       <Child4 user={user} />
//     </>
//   );
// }
// function Child4({ user }) {
//   return (
//     <>
//       <div>Child4 {user}</div>

//     </>
//   );
// }

const UserContext = createContext();
function App() {
  const [user, setUser] = useState("Keshav");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
      <Child1 />
    </UserContext.Provider>
  );
}

function Child1() {
  return (
    <>
      <div>Child1</div>
      <Child2 />
    </>
  );
}
function Child2() {
  return (
    <>
      <div>Child2</div>
      <Child3 />
    </>
  );
}
function Child3() {
  return (
    <>
      <div>Child3</div>
      <Child4 />
    </>
  );
}
function Child4() {
  const user = useContext(UserContext)
  
  console.log(user);
  return (
    <>
      <div>Child4 {user} </div>
    </>
  );
}

export default App;
