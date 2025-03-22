import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";

type cartItemsCount = ProductsData & {
  count: number
}

interface CartItems {
  addedItemsId: cartItemsCount[]
}

const InitialCart: CartItems = {
  addedItemsId: []
}


export const cartSlice = createSlice({
  name: "user",
  initialState: InitialCart,
  reducers: {
    addItemToCard: (state, action: PayloadAction<ProductsData>) => {
      const existingItem = state.addedItemsId.find(item =>
        item.id === action.payload.id
      )
      if(existingItem){
        existingItem.count = existingItem.count + 1
      }else{
        state.addedItemsId.push({...action.payload, count : 1})
      }
    }
  }
})

export default cartSlice.reducer;
export const { addItemToCard } = cartSlice.actions;