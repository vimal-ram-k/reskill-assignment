import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/store"
import { ProductsData } from "../types/productTypes"
import { addItemToCard, removeFromCart } from "../redux/cartSlice/cartSlice"


export const AddOrRemoveCartProduct = (props : {item : ProductsData , btn: "remove"  | "add" }) =>{

    const dispatch:AppDispatch = useDispatch()

    function removeItem(){
        dispatch(removeFromCart(props.item))
    }

    function addItem(){
        dispatch(addItemToCard(props.item))
    }

    const icon = props.btn === "add" ? "+" : "-"
    const callback = props.btn === "add" ? addItem : removeItem

    return(
    <div>
      <button onTouchStart={callback} onClick={callback} className="btn-cart-ra">{icon}</button>
    </div>
    )

}