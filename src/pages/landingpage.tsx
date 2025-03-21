import { Outlet } from "react-router-dom"
import { NavigationBar } from "../UI/navigationbar"
import { useEffect, useState } from "react";
import { ProductsData } from "../types/productTypes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productsSlice/productSlice";
import { AppDispatch } from "../redux/store";
import { ProductList } from "../components/productlist";


export const LandingPage = () => {

    const [products, setProducts] = useState<ProductsData[]>([]);
    const [searchKey, setSearchKey] = useState("");
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



    function addSearchKey (text : string){
setSearchKey(text)
    }

    return(
        <>
        <NavigationBar onCallback={addSearchKey} />
        <ProductList products={products} searchKey ={searchKey} />
        <Outlet />
        </>
    )
}