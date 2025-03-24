
import { PriceDetails } from "../UI/pricedetails";
import { ShippingAddressDetails } from "../UI/shippingaddresscard";
import { OrderConfirmation } from "../components/orderconfimation";
import { useState } from "react";
import { AddOrRemoveCartProduct } from "../components/addorremovecartproduct";
import { AddressCard } from "../components/addresscard";
import { Rootstate } from "../redux/store";
import { useSelector } from "react-redux";



export const CartPage = () =>{

    const itemsId = useSelector((state : Rootstate) => {
        return state.cart.addedItemsId;
    })

    const [showAddressCard , setShowAddressCard] = useState(false);
    const [showOrderPaynow , setShowOrderPayNow] = useState(false);

    function handleShowAddressCard (){
        setShowAddressCard(prev => !prev);
    }
    function handleShowPay(){
        setShowOrderPayNow(prev => !prev)
    }



    return(
        <>
        <div className="cart-container">
            <div>

            <section className="cart-header">
                <h1>From Saved Address</h1>
                <button className="cart-btn" onClick={handleShowAddressCard}>Enter Delivery Address</button>
            </section>
            <ShippingAddressDetails  />

            {
                showAddressCard && <AddressCard  closeModule= {handleShowAddressCard} />
            }
   
        <ul className="cart-product-card"> 
          {
              itemsId.map((item , index) => {
                  return(
                        <section className=" cart-product-card-grid">
                        <img src={item.image} alt="" width={100} height={100} />
                        <h1>{item.title}</h1>
                        <h1 className="cartpage-quantity">Quantity : 
                        <AddOrRemoveCartProduct item={item} btn="remove" />
                             {item.count}
                        <AddOrRemoveCartProduct item={item} btn="add" />
                             
                             </h1>
                        <h1 className="cartpage-price">Price : ${item.price * item.count}</h1>
                        </section>
                )
            })
        }
        </ul>
        </div>
        <PriceDetails itemId={itemsId} onCallback ={handleShowPay} />
        {
            showOrderPaynow && 
        <OrderConfirmation onCallback ={handleShowPay} />

        }
        </div>
        
        </>
    )
}