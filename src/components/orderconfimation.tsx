import { Link } from "react-router-dom"
import orderconfirmedanimation from '../assets/7606747_3701128.jpg'

export type ExposeMethods = {
    focus : () => void
}

export const OrderConfirmation = (props : {onCallback : () => void}) =>{


    return(
        <div className="order-confr-container"  >
            <h1 className="header">Order Confirmed !</h1>
            <img className="order-confirm-ani" src={orderconfirmedanimation} alt="" />
            <Link to="/order">
            <button className="pay-btn" onClick={props.onCallback}>Done</button></Link>
           
        </div>
    )
}