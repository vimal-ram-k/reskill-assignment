import { NavigationBar } from "../UI/navigationbar"
import { Spinner } from "../components/spinner";
import {  Outlet, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react";
import { ProductsData } from "../types/productTypes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productsSlice/productSlice";
import { AppDispatch } from "../redux/store";
import spinnergif from '../assets/icons8-spinner.gif'
import { OfferBanner } from "../components/offerbanner";

const ProductList = lazy(() => import('../components/productlist'))
export const LandingPage = () => {


    const [searchspiner, setSearchSpinner] = useState(true)

 
    const [products, setProducts] = useState<ProductsData[]>([]);
    const [searchKey, setSearchKey] = useState("");
    const dispatch : AppDispatch = useDispatch();


    useEffect(() =>{
        setTimeout(() =>{
            setSearchSpinner(false)
        } ,2000)
        setSearchSpinner(true)
    }, [searchKey])


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
        if(location.pathname ==="/"){
        window.scrollTo(0, 100)
        }
        setShowProductList(location.pathname === "/");
        setSearchKey("")
    },[]);

    return(
        <>
        <NavigationBar onCallback={addSearchKey} />
        {
            showProductList && 
            <Suspense fallback={<Spinner />}>
               {searchKey.length === 0 &&  <OfferBanner />}
               {searchKey.length !== 0 && 
               <div>
                <h1 className="search-result-header">Search Results {searchspiner && <img src={spinnergif} alt="" />}</h1>
                </div>}
        <ProductList products={products} searchKey ={searchKey} />
            </Suspense>

        }
        <Outlet />
        </>
    )
}