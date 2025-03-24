import { ChangeEvent } from "react"
import { AddressType } from "../types/addressTypes";


export const AddressCard  = (props : {onCallback : (obj: {}) => void ,   closeModule : () => void , address : AddressType }) =>{


    function handleData (e : ChangeEvent<HTMLInputElement>){
        const {name , value} = e.target;
        console.log(name , value)
        props.onCallback(name , value)
    }
    return(
        <form action="" className="address-card">
            <h1 className="header">Enter your Address</h1>
            <label htmlFor="receiver-name"><input onChange={handleData} type="text" placeholder="Name" name="name" value={props.address.name}/></label>
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="S/o" name="fathername" value={props.address.fathername}/></label>
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="area" name="area" value={props.address.area}/></label> 
            <label htmlFor=""><input type="text" onChange={handleData} placeholder="pincode" name="pincode" value={props.address.pincode}/></label>
            <button className='' onClick={props.closeModule}>Done</button>
        </form>
    )
}