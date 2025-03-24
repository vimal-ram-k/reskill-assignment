import { useSelector } from "react-redux";
import { ProductsData } from "../types/productTypes"
import { Rootstate } from "../redux/store";
import { Link } from "react-router-dom";


export const PriceDetails = (props : {itemId : ProductsData [] , onCallback : () => void }) =>{

    const products = useSelector((state : Rootstate) => state.cart.addedItemsId);
    const total_price = Math.round(products.reduce((sum , item) => sum + (item.price * item.count) ,0))
    const discount = Math.floor(total_price % 10);

    
       

    return(

        <section className="cart-price-details">
        <h1 className="price-container-header">PRICE DETAILS</h1>
        <ul>
        <li className="">
            <h1>Price{`(${props.itemId.length} item)`}</h1>
            <h1>${total_price}</h1>
        </li>
        <li className="">
            <h1>Discount</h1>
            <h1>${discount}</h1>
        </li>
        <li className="">
            <h1>Delivery Charges</h1>
                <h1 className="delivery-charge"><del className="">$40</del>Free</h1> 
        </li>
        <li>
            <h1>Total Amount</h1>
            <h1>$ {total_price  - discount }</h1>
        </li>
        <Link to="/order">
        <button className="place-order-btn">PLACE ORDER</button>
        
        </Link>
        </ul>


    </section>
    )
}