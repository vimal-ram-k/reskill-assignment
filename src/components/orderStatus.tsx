import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { orderedItems, ProductsData } from "../types/productTypes";
import { cancelProduct } from "../redux/cartSlice/cartSlice";

export const OrderStatus = (props : {products : orderedItems []}) =>{

    const isNoOrder = props.products.length === 0 ;

    const dispatch : AppDispatch = useDispatch();

    function cancel (product : ProductsData){
        dispatch(cancelProduct(product))
    }

    return(
        <div className="orderpage-main">
        <h1>Orders :</h1>
        <ul className="orderpage-container">
            {
                props.products.map((item, index) =>{
                    
                    return(
                        <li className="orderpage-section" key={index+item.title.trim()[0]}>
                            <section className="orderpage-details-container">
                            <img src={item.image} alt="" />
                            <h1>{item.title}</h1>
                            <h1 className={item.cancelled ? "cancelled" : "placed"}>Status : Order {item.cancelled ?  "Cancelled" : "Placed"}</h1>
                            <h1>Deliver : {`${new Date().getDate() + 3}-Mon-2025 `}</h1>
                            </section>
                            <section className="orderpage-btn-collection">
                            <button className="cancel" onClick={() => {cancel(item)}}>Cancel Order</button>
                            <button className="track">Track</button>
                            </section>

                        </li>
                    )
                })
            }
        </ul>
        {isNoOrder && <h1 className="order">No Orders</h1>}

            </div>
    )
}