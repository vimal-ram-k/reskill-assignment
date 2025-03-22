import { ShippingAddressDetails } from "../UI/shippingaddresscard"


export const OrderConfirmation = (props : {onCallback : () => void}) =>{

    return(
        <div className="order-confr-container">
            <h1>Order Confirmed !</h1>
            <ShippingAddressDetails />
            <button onClick={props.onCallback} className="pay-btn">Close</button>
        </div>
    )
}