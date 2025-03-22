import { useSelector } from "react-redux"
import { Rootstate } from "../redux/store";
import { ProductCard } from "../components/productcard";
import { TotalPrice } from "../UI/totalprice";
import { PriceDetails } from "../UI/pricedetails";

export const CartPage = () =>{

    const itemsId = useSelector((state : Rootstate) => {
        return state.cart.addedItemsId;
    })

    const total_price = itemsId.reduce((sum , item) => sum + item.price , 0); 
    const discount = Math.floor(total_price % 10);


    return(
        <>
        <div className="cart-container">
            <div>

            <section className="cart-header">
                <h1>From Saved Address</h1>
                <button className="cart-btn">Enter Delivery Pincode</button>
            </section>
   
        <ul>
          {
              itemsId.map((item , index) => {
                  return(
                      <div className=" cart-product-card">
 
                        <section className=" cart-product-card-grid">
                        <img src={item.image} alt="" width={100} height={100} />
                        <h1>{item.title}</h1>
                        </section>

                        <section>
                            <h1>Quantity : {item.count}</h1>
                        </section>

                        <section>
                            <h1>{item.count} * {item.price}</h1>
                        </section>

                        <section>
                            <h1>$ {item.count * item.price}</h1>
                        </section>
                    </div>
                )
            })
        }
        </ul>
        </div>
        <PriceDetails itemId={itemsId} />

        </div>
        
        </>
    )
}