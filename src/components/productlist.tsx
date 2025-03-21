import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./productcard";
import { AppDispatch , Rootstate } from "../redux/store";
import { addProducts } from "../redux/productsSlice/productSlice";
import { useDispatch } from "react-redux";

type ProductsData = {
    id : number,
    title : string;
    image :string,
    price :number
}



export const ProductList = () =>{

    const [products, setProducts] = useState<ProductsData[]>([]);
    const dispatch : AppDispatch = useDispatch();

    useEffect(() =>{

        const fetchProducts = async() =>{
            const res = await axios.get("https://fakestoreapi.com/products")
            const data =await res.data;
            console.log(data)
            setProducts(data);
            dispatch(addProducts(data))
        }

        fetchProducts();
    },[])

    return(

        <ul className="product-container">
       <ProductCard products={products} />
        </ul>


    )
}