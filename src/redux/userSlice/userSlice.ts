import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItems{
    addedItemsId : number[]
}

const InitialCart : CartItems= {
    addedItemsId :[]
}

export const userSlice = createSlice({
    name : "user",
    initialState : InitialCart,
    reducers : {
      addItemToCard : (state , action : PayloadAction<number>) =>{
          state.addedItemsId.push(action.payload)
      } 
    }
})

export default userSlice.reducer;
export const {addItemToCard} = userSlice.actions;