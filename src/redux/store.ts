import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";


export const Store = configureStore({
    reducer :{
        products : productSlice.reducer
    }
})


export type Rootstate = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;