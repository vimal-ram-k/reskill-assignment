import { ChangeEvent, useEffect, useState } from "react"
import { AddressType } from "../types/addressTypes";
import { AppDispatch, Rootstate } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setAddressDetailsRedux } from "../redux/userSlice/userSlice";



export const AddressCard  = (props : { closeModule : () => void }) =>{
    
    const [address , setAddress ]= useState<AddressType>({
        name : "",
        fathername : "",
        area : "",
        pincode : ""
    })

    const addressRedux = useSelector((state : Rootstate) => state.address.address);
    useEffect(() => {
        setAddress(addressRedux);
    }, [addressRedux]);

    const dispatch : AppDispatch = useDispatch();


    function handleData (e : ChangeEvent<HTMLInputElement>){
        const {name , value} = e.target;
        setAddressDetails(name as keyof AddressType , value)
    }


    function setAddressDetails (key : keyof AddressType , value :string){
        setAddress(prev =>{
           return{ ...prev , [key] : value}}
        )

    }

    function saveAddress (){
        dispatch(setAddressDetailsRedux(address))
        props.closeModule()
    }
    
    return(
        <form action="" className="address-card">
            <h1 className="header">Enter your Address</h1>
            <label htmlFor="receiver-name"><input onChange={handleData} type="text" placeholder="Name" name="name" value={address.name}/></label>
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="S/o" name="fathername" value={address.fathername}/></label>
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="area" name="area" value={address.area}/></label> 
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="pincode" name="pincode" value={address.pincode}/></label>
            <button className='' onTouchStart={saveAddress} onClick={saveAddress}>Done</button>
        </form>
    )
}