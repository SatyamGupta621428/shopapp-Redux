import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice.js"

export const store = configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
})