import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";


interface CartItems{
    addedItemsId : ProductsData[]
}

const InitialCart : CartItems= {
    addedItemsId :[]
}


export const cartSlice = createSlice({
    name : "user",
    initialState : InitialCart,
    reducers : {
      addItemToCard : (state , action : PayloadAction<ProductsData>) =>{

    state.addedItemsId.push(action.payload)
      } 
    }
})

export default cartSlice.reducer;
export const {addItemToCard} = cartSlice.actions;