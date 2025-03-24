import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store"
import { OrderStatus } from "../components/orderStatus";
import { useState } from "react";
import { OrderConfirmation } from "../components/orderconfimation";


export const OrderPage = () =>{


    const orderedItems = useSelector((state : Rootstate) => state.cart.orderedItems);
    const [showOrderPaynow , setShowOrderPayNow] = useState(true);

    function handleShowPay(){
        setShowOrderPayNow(prev => !prev)
    }


    return(
        <div>
{
    showOrderPaynow && <OrderConfirmation onCallback={handleShowPay} />
}
        <OrderStatus products={orderedItems} />
        </div>
    )
}