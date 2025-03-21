import { useParams } from "react-router-dom"

import { Rootstate } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/productcard";
import { AppDispatch } from "../redux/store";
import { addItemToCard } from "../redux/userSlice/userSlice";
export const ProductPage = () =>{


    const dispatch : AppDispatch= useDispatch()
    const {id} = useParams();

    const product = useSelector( (state  :Rootstate )=> {
        return state.products.find(item => item.id === Number(id));
    })

    function addItem (){
        dispatch(addItemToCard(Number(id)))
    }

    if(!product) return <h1>No product</h1>
    return(
        <div>
            <ProductCard products={[product]} />
            <button onClick={addItem}>Add to Cart</button>
        </div>
    )
}