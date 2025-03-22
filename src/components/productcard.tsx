import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


type ProductsData = {
    id: number,
    title: string;
    image: string,
    price: number
}
export const ProductCard = (props: { products: ProductsData[] , totalPrice : boolean  }) => {

 

    return (

        props.products.map((item, index) =>
            <Link to={`/${item.id}`} key={index}>
            <li className=" product-item">
                <img src={item.image} alt="" className="product-image" />
                <h1 className="product-title">{item.title}</h1>
                <h1>From ${item.price}</h1>
            </li>
            </Link>

        ))

}