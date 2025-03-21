import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";
import cartSlice from "./cartSlice/cartSlice";


export const Store = configureStore({
    reducer :{
        products : productSlice.reducer,
        cart: cartSlice
    }
})


export type Rootstate = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;