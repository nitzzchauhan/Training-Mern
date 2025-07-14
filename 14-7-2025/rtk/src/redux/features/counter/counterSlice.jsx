import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  countState: { value: 0 },
  reducers: {
    // counter/increment
    increment: (state=countState) => {
      state.value += 1;
    },
    // immer -->let us write mutable code --> immutable code
    // counter/decrement
    decrement: (state)=>
      state.value += 1,
    incrementByAmount: (state, actions) => {
      state.value += actions.payload;
    },
   
  },
});


// let initialState = {
//   count:0
// }
// store = store(reducer)
// reducer = (state=initialState,action)=>{
//   action.type 
//       // if increment 
//       return {...state,state.count += 1}    
// }

// store.dispatch(action)

// console.log(counterSlice)

















export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

//

// store = {
//    user:{}, --> createSlice(user)
//    job:{}, -->createSlice(job)
//    app:{}, --> createSlice(apps)
//    comapny:{}
// }
