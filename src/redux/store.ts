import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";
import userSlice  from "./userSlice/userSlice";


export const Store = configureStore({
    reducer :{
        products : productSlice.reducer,
        user: userSlice
    }
})


export type Rootstate = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;