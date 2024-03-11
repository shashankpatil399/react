import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer"; // Assuming you have a userReducer file

const store = configureStore({
    reducer:{
        todos: authSlice, // Assuming userReducer is the reducer function for the 'user' slice
        user: authSlice,
    }
});

export default store;