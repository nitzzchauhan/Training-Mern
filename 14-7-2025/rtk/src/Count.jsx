import React from "react";
import { useSelector, useDispatch } from "react-redux";

// actions
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice.jsx";


export default function Count() {
    const count = useSelector((state)=>console.log(state.counter))
    // const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

  return (
    <>
      <div>Count:{count}</div>
      <button onClick={()=> dispatch(increment())}>Increment +1</button>
      <button onClick={()=> dispatch(decrement())}>Decrement -1</button>
      <h4>Increment by Amount</h4>
      {/* <input type="text" name="" id="" /> */}
      <button onClick={()=> dispatch(incrementByAmount(100))}>Decrement by amount</button>
      <h2>User:</h2>
    </>
  );
}
