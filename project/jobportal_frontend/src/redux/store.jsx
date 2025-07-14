import {configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice.jsx'


export const store = configureStore({
    reducers:{
        auth:authSlice,
    },
    //middleware:{}
} )