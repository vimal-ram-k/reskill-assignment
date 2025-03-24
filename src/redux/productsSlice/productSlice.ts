import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "../../types/productTypes";


const getIntialProductList = () =>{

    try{
        const parsedProductList = localStorage.getItem("store");
        if(parsedProductList){
            const productList = JSON.parse(parsedProductList)
            return productList.products || []
        }
    }catch(err){
        return err
    }

    return [];
}

const initialState: ProductsData[] = getIntialProductList()

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