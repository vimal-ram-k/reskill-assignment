import { Link } from "react-router-dom";
import { ProductsData } from "../types/productTypes";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { addItemToCard } from "../redux/cartSlice/cartSlice";
import { ProductCountRemeinder } from "./productCountRemainder";

export const ProductCard = (props: { products: ProductsData[] , totalPrice : boolean  }) => {

 
    const dispatch : AppDispatch = useDispatch();

    function addItemtoCart (product : ProductsData){
        dispatch(addItemToCard(product))
    }
    return (

        props.products.map((item, index) =>
            <div className="product-card">

            <Link to={`/${item.id}`} key={index} className="">
            <li className="">
                <img src={item.image} alt="" className="product-image" />
                <h1 className="product-title">{item.title}</h1>
                <button className="cart-rate-btn" disabled>{item.rating.rate}</button>
                <h1>From ${item.price}</h1>
            
            </li>
            </Link>
        
        <div className="product-card-footer"> 
        <button className="cart-add-btn" onClick={() => addItemtoCart(item)}>Add to Cart</button>
            {
                item.id % 3 === 1 || item.id % 3 === 2 &&
                <ProductCountRemeinder id={item.id} />
               }
        </div>
            </div>
                

        ))

}