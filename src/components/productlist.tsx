import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./productcard";



type ProductsData = {
    id : number,
    title : string;
    image :string,
    price :number
}



export const ProductList = () =>{

    const [products, setProducts] = useState<ProductsData[]>([]);

    useEffect(() =>{

        const fetchProducts = async() =>{
            const res = await axios.get("https://fakestoreapi.com/products")
            const data =await res.data;
            console.log(data)
            setProducts(data);
        }

        fetchProducts();
    },[])

    return(

        <ul className="product-container">
       <ProductCard products={products} />
        </ul>


    )
}