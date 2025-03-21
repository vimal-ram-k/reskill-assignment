import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store";
import { ProductCard } from "../components/productcard";

export const CartPage = () =>{

    const itemsId = useSelector((state : Rootstate) => {
        return state.cart.addedItemsId;
    })

    return(
        <ul>
          <ProductCard products={itemsId} />
        </ul>
        
    )
}