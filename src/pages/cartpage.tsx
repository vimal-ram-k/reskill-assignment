import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store";
import { ProductCard } from "../components/productcard";
import { TotalPrice } from "../UI/totalprice";

export const CartPage = () =>{

    const itemsId = useSelector((state : Rootstate) => {
        return state.cart.addedItemsId;
    })

    return(
        <ul>
          <ProductCard products={itemsId} />
          <TotalPrice items={itemsId}/>
        </ul>
        
    )
}