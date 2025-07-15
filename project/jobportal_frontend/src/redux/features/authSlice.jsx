import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState: {
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading = action.payload
        },

        setUser:(state,action)=>{
            console.log(action)
            console.log(state.user)
            state.user = action.payload
            console.log(state.user)
        }
    }
})


// setLoading is a function
// 
// aciotions later on will be imported by the components
export  const {setLoading, setUser } = authSlice.actions

// auth reducer , later on will be imported by the store
export default authSlice.reducer;



// plain objects
// {type:"auth/setloading", payload:true/false}

// {}