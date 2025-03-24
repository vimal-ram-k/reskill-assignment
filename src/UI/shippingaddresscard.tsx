import { AddressType } from "../types/addressTypes"

export const ShippingAddressDetails = (props : {address : AddressType}) =>{


    return(
        <div className=" shipping-address-card">
            <h1 className="header">Shipping Details : </h1>
            <address className="">
                <h1>{props.address.name}</h1>
                <h1>{props.address.fathername}</h1>
                <h1>{props.address.area}</h1>
                <h1>{props.address.pincode}</h1>
            </address>
        </div>
    )
}