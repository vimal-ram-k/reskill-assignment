import { Rootstate } from "../redux/store";

export const saveStoreLocalstorage = (state :Rootstate) =>{
    try{
        
        localStorage.setItem("store" , JSON.stringify(state));
        console.log("stored")

    }catch(err){
        return err
    }
}


export const loadStoreFromLocalstoage = () =>{
    try{

        const store = localStorage.getItem("store");
        console.log("get store" ,store)
        return store;
    }catch(err){
        return err
    }
}