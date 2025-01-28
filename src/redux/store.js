import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import wishListSlice from "./wishListSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        wishList:wishListSlice

    }
})

export default store;