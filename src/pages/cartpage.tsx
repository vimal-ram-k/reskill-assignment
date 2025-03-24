
import { PriceDetails } from "../UI/pricedetails";
import { ShippingAddressDetails } from "../UI/shippingaddresscard";
import {  useState } from "react";
import { AddOrRemoveCartProduct } from "../components/addorremovecartproduct";
import { AddressCard } from "../components/addresscard";
import { Rootstate } from "../redux/store";
import { useSelector } from "react-redux";



export const CartPage = () =>{


    const itemsId = useSelector((state : Rootstate) => {
        return state.cart.addedItemsId;
    })

    const [showAddressCard , setShowAddressCard] = useState(false);

    function handleShowAddressCard (){
        setShowAddressCard(prev => !prev);
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

            {
                itemsId.length === 0 ? <h1 className="no-item-cart">No Item in Cart</h1> : 
        <ul className="cart-product-card"> 
          {
              itemsId.map((item , index) => {
                  return(
                    <li key={index+item.title.trim()[0]}>

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
                    </li>
                )
            })
        }

        </ul>
            }
        </div>
        <PriceDetails itemId={itemsId}  />
        </div>
        
        </>
    )
}