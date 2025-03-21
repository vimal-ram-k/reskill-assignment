import { useParams } from "react-router-dom"

import { Rootstate } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addItemToCard } from "../redux/cartSlice/cartSlice";
export const ProductPage = () =>{


    const dispatch : AppDispatch= useDispatch()
    const {id} = useParams();

    const product = useSelector( (state  :Rootstate )=> {
        return state.products.find(item => item.id === Number(id));
    })


    if(!product) return <h1>No product</h1>

    function addItem (){
        if(product)
        dispatch(addItemToCard(product))
    }
    return(
        <div className="cart-container">
            <section>
                <img src={product.image} alt="" className="cart-product-image"/>
            <button className="cart-add-btn" onClick={addItem}>Add to Cart</button>

            </section>

            <div>
                <h1>{product.title}</h1>
                <button className="cart-rate-btn" disabled>{product.rating.rate}</button>
                <h1 className="cart-alert"> Hurry, Only 8 left</h1>
                <h1 className="cart-product-desc">{product.description}</h1>
                <h1>$ {product.price}</h1>
            </div>
        </div>
    )
}