import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";
import cartSlice from "./cartSlice/cartSlice";
import { loadStoreFromLocalstoage, saveStoreLocalstorage } from "../helper/loadstorelocally";


const localstore = loadStoreFromLocalstoage() || {
    products: [],  
    cart: { addedItemsId: [] },
};

export const Store = configureStore({
    reducer :{
        products : productSlice.reducer,
        cart: cartSlice
    },
    preloadedState : localstore,
})


Store.subscribe(() =>{
    saveStoreLocalstorage(Store.getState())
})

export type Rootstate = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;