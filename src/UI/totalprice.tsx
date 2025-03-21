import { ProductsData } from "../types/productTypes";


export const TotalPrice = (props : {items : ProductsData []})=>{

    const total = props.items.reduce((sum, item) => sum + item.price, 0);
    return(
        <h1>{total}</h1>
    )
}