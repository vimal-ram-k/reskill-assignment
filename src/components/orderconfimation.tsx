import { ShippingAddressDetails } from "../UI/shippingaddresscard"
import { Link } from "react-router-dom"


export type ExposeMethods = {
    focus : () => void
}

export const OrderConfirmation = () =>{


    return(
        <div className="order-confr-container"  >
            <h1 className="header">Order Confirmed !</h1>
            <ShippingAddressDetails />
            <Link to="/">
            <button className="pay-btn">Close</button></Link>
           
        </div>
    )
}