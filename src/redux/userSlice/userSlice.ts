import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType } from "../../types/addressTypes";



type userAddressType = {
    address : AddressType
}


const getState = () =>{

    try{
        const store = localStorage.getItem("store");
        if(store){
            const state =  JSON.parse(store) 
            return state.address || {address : {name : "" , fathername : "" , area : "" , pincode : ""}}
        }
    }catch(err){
        console.log(err)
    }

    return {address : {name : "" , fathername : "" , area : "" , pincode : ""}}
}
 
export const UserAddressinitalState : userAddressType = getState();


export const UserSlice =createSlice({
    name : "useraddress",
    initialState : UserAddressinitalState,
    reducers : {
        getUserAddress :(state ) =>{
             state.address
        },
        setAddressDetailsRedux :(state , action : PayloadAction<AddressType>) =>{
            state.address = action.payload
        }
    }
})


export const {getUserAddress , setAddressDetailsRedux} = UserSlice.actions;
export const UserAddressreducer  =  UserSlice.reducer