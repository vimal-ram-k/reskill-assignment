import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";

type cartItemsCount = ProductsData & {
  count: number
}

interface CartItems {
  addedItemsId: cartItemsCount[]
}

const getIntialState = () =>{
  const state = localStorage.getItem("store");
  if(state){
    try{
      const parsedState = JSON.parse(state);
      return parsedState.cart || {addedItemsId : []};
    }catch(err){
      return err
    }
  }
  return { addedItemsId : []}
}
const InitialCart: CartItems  = getIntialState();


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
    },
    removeFromCart : (state , action : PayloadAction<ProductsData>)=>{
      const existingItem = state.addedItemsId.find(item =>
        item.id === action.payload.id
      )
      if(existingItem){
        existingItem.count = existingItem.count > 0 ? existingItem.count - 1 : existingItem.count;
    }
  }
  }
})

export default cartSlice.reducer;
export const { addItemToCard , removeFromCart } = cartSlice.actions;