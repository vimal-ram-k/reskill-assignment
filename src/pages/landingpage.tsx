import { NavigationBar } from "../UI/navigationbar"
import { Spinner } from "../components/spinner";
import {  Outlet, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react";
import { ProductsData } from "../types/productTypes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productsSlice/productSlice";
import { AppDispatch } from "../redux/store";
import { OfferBanner } from "../components/offerbanner";

const ProductList = lazy(() => import('../components/productlist'))
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

    const location = useLocation();

    const [showProductList , setShowProductList] = useState(true);
    useEffect(() => {
        setShowProductList(location.pathname === "/");
    }, [location.pathname]);

    return(
        <>
        <NavigationBar onCallback={addSearchKey} />
        {
            showProductList && 
            <Suspense fallback={<Spinner />}>
                <OfferBanner />
        <ProductList products={products} searchKey ={searchKey} />
            </Suspense>

        }
        <Outlet />
        </>
    )
}