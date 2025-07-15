import {configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice.jsx'


export const store = configureStore({
    reducer:{
        auth:authSlice
    }
})

// {type:"auth/setuser", payload:user}
