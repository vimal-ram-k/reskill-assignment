import { ShippingAddressDetails } from "../UI/shippingaddresscard"
import { Link } from "react-router-dom"


export type ExposeMethods = {
    focus : () => void
}

export const OrderConfirmation = (props : {onCallback : () => void}) =>{


    return(
        <div className="order-confr-container"  >
            <h1 className="header">Order Confirmed !</h1>
            <ShippingAddressDetails />
            <Link to="/order">
            <button className="pay-btn" onClick={props.onCallback}>Close</button></Link>
           
        </div>
    )
}