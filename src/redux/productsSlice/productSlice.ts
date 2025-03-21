import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";




const initialState: ProductsData[] = []

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<ProductsData[]>) => {
            return action.payload
        },
   
      
    }
})

export default productSlice
export const { addProducts  } = productSlice.actions