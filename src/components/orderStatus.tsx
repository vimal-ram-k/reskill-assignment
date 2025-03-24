import { ProductsData } from "../types/productTypes";
import { OrderConfirmation } from "./orderconfimation";


export const OrderStatus = (props : {products : ProductsData []}) =>{


    return(
        <div className="orderpage-main">
        <h1>Orders :</h1>
        <ul className="orderpage-container">
            {
                props.products.map((item, index) =>{
                    
                    return(
                        <li className="orderpage-section">
                            <section className="orderpage-details-container">
                            <img src={item.image} width={50} height={50} alt="" />
                            <h1>{item.title}</h1>
                            <h1 className="status">Status : Order Placed</h1>
                            <h1>Deliver : {`${new Date().getDate() + 3}-Mon-2025 `}</h1>
                            </section>
                            <button>Cancel Order</button>
                        </li>
                    )
                })
            }
        </ul>
            </div>
    )
}