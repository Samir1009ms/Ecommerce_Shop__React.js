import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./expense/expense-slice"

const store=configureStore({

    reducer:{
    shop:addToCart,
    }
})

export default store