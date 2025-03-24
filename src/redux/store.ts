import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";
import cartSlice from "./cartSlice/cartSlice";
import { loadStoreFromLocalstoage, saveStoreLocalstorage } from "../helper/loadstorelocally";
import { UserAddressinitalState, UserSlice } from "./userSlice/userSlice";


const localstore = loadStoreFromLocalstoage() || {
    products: [],  
    cart: { addedItemsId: [] },
    address : {address : UserAddressinitalState}
};

export const Store = configureStore({
    reducer :{
        products : productSlice.reducer,
        cart: cartSlice,
        address : UserSlice.reducer
    },
    preloadedState : localstore,
})


Store.subscribe(() =>{
    saveStoreLocalstorage(Store.getState())
})

export type Rootstate = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;