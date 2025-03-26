import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store"

export const ShippingAddressDetails = () =>{


    const address = useSelector((state :Rootstate) => state.address.address);
    const isAddressEmpty = !address || !address.name || address.name.length === 0;


    return(
        <div className=" shipping-address-card">
            {
                   isAddressEmpty ?
                         <h1 className="">Please Enter your Address Details</h1>
                    
                
            :
            <>
            <h1 className="header">Shipping Details : </h1>
            <ul className="address-section">
                <li>
            <h1 className="name comma">{address.name}</h1>

                </li>
                <li>
                <h1 className="fathername comma">{address.fathername}</h1>
                </li>
                <li>
                <h1 className="comma">{address.area}</h1>

                </li>
                <li>
                <h1>{address.pincode}</h1>

                </li>
            </ul>
            <address className="">
            </address>
            </>
}
        </div>
    )
}