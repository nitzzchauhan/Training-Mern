const { createStore } = require("redux");

// action -->  plain object 
const increment = { type: `INCREMENT` }
const decrement = { type: `DECREMENT` }
// state
let initialState = {
    count: 0
}

let inc = (state) => {
    state.count += 1;
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            // inc(state)
        
        return { ...state, count: state.count + 1 } //new memory refernce
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

const store = createStore(reducer)

store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)

console.log(store.getState())
