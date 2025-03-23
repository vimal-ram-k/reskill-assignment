import { Link, useParams } from "react-router-dom"

import { Rootstate } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addItemToCard } from "../redux/cartSlice/cartSlice";
import { ProductCountRemeinder } from "../components/productCountRemainder";
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
        <div>
            <Link to="/">
            <button className="back-btn">Back</button></Link>
        <div className="productpage-container">
                <img src={product.image} alt="" className="cart-product-image"/>
            <div>
                <h1>{product.title}</h1>
                <button className="cart-rate-btn" disabled>{product.rating.rate}</button>
                <ProductCountRemeinder id={product.id} />
                <h1 className="cart-product-desc">{product.description}</h1>
                <h1>$ {product.price}</h1>
            <button className="cart-add-btn" onClick={addItem}>Add to Cart</button>
            </div>
        </div>
        </div>
    )
}