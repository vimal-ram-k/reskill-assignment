import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";

type cartItemsCount = ProductsData & {
  count: number
}

type orderedItemState = ProductsData & {
  cancelled : boolean
}

interface CartItems {
  addedItemsId: cartItemsCount[]
  orderedItems : orderedItemState[];
}

const getIntialState = () =>{
  const state = localStorage.getItem("store");
  if(state){
    try{
      const parsedState = JSON.parse(state);
      return parsedState.cart || {addedItemsId : [] , orderedItems : []};
    }catch(err){
      return err
    }
  }
  return { addedItemsId : [], orderedItems : []}
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
        if(existingItem.count > 1){
          existingItem.count =  existingItem.count -1
        }else{
         state.addedItemsId = state.addedItemsId.filter(item => item.id !== existingItem.id);
        }
    }

  },
  placeOrder : (state) =>{
    state.orderedItems.push(...state.addedItemsId.map(item => ({...item , cancelled : false})));
    state.addedItemsId= [];
    
  },
  cancelProduct : (state , action : PayloadAction<ProductsData>) =>{
     const existItem =state.orderedItems.find(item => item.id === action.payload.id )
     if(existItem){
      existItem.cancelled = true
     }
  }
  }
})

export default cartSlice.reducer;
export const { addItemToCard , removeFromCart , placeOrder , cancelProduct} = cartSlice.actions;