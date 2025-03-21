import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ProductsData = {
    id: number,
    title: string;
    image: string,
    price: number
}


const initialState: ProductsData[] = [

]

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