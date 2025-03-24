import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store"

export const ShippingAddressDetails = () =>{


    const address = useSelector((state :Rootstate) => state.address.address);


    return(
        <div className=" shipping-address-card">
            <h1 className="header">Shipping Details : </h1>
            <address className="">
                <h1 className="name comma">{address.name}</h1>
                <h1 className="fathername comma">{address.fathername}</h1>
                <h1 className="comma">{address.area}</h1>
                <h1>{address.pincode}</h1>
            </address>
        </div>
    )
}