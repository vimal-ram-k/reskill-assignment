import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store"
import { OrderStatus } from "../components/orderStatus";
import { useEffect } from "react";


export const OrderPage = () =>{

    useEffect(() =>{
        window.scrollTo(0,0)
    })

    const orderedItems = useSelector((state : Rootstate) => state.cart.orderedItems);


    return(
        <div>

        <OrderStatus products={orderedItems} />
        </div>
    )
}