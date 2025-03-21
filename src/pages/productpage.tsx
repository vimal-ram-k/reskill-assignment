import { useParams } from "react-router-dom"

import { Rootstate } from "../redux/store";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/productcard";
export const ProductPage = () =>{



    const {id} = useParams();

    const product = useSelector( (state  :Rootstate )=> {
        return state.products.find(item => item.id === Number(id));
    })

    if(!product) return <h1>No product</h1>
    return(
        <ProductCard products={[product]} />
    )
}