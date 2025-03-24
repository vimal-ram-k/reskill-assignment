import { forwardRef, useImperativeHandle, useRef } from "react"
import { ShippingAddressDetails } from "../UI/shippingaddresscard"


export type ExposeMethods = {
    focus : () => void
}

export const OrderConfirmation = forwardRef((props : {onCallback ?: () => void }, ref ?: React.Ref<ExposeMethods>) =>{

    const divref = useRef< HTMLDivElement | null>(null);

    useImperativeHandle(ref , () =>({
        focus: () => {
            divref.current?.focus()
        }
    }) )
    return(
        <div className="order-confr-container" ref={divref} >
            <h1 className="header">Order Confirmed !</h1>
            <ShippingAddressDetails />
            <button onClick={props.onCallback} className="pay-btn">Close</button>
        </div>
    )
})