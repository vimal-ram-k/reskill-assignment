
import { ProductCard } from "./productcard";

import { ProductsData } from "../types/productTypes";



export const ProductList = (props : { products : ProductsData [] , searchKey : string}) =>{

    const filteredProducts = props.products.filter((product) =>
        product.title.toLowerCase().includes(props.searchKey.toLowerCase()) 
    );

    return(

        <ul className="product-container">
       <ProductCard products={filteredProducts} totalPrice={true} />
        </ul>


    )
}