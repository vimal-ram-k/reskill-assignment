import { Link } from "react-router-dom"
import logo from '../assets/logo.svg';
import person from '../assets/person.png';
import searchicon from '../assets/search-icon.png';
import cart from '../assets/cart.png';
import { ChangeEvent } from "react";

export const NavigationBar = (props : {onCallback : (text : string) => void}) =>{

    return(
        <div className="navigationbar">
            <Link to={"/"} className="logo"> 
            <img src={logo} alt="" width={30} height={30} />
            <h1>ShopCart</h1>
            </Link>

            <section className="right-container">
                <div className="search-section">
               <div className="search-bar">
               <img src={searchicon} className="searchicon" alt="" width={25} height={25} />
               <input type="text" className="searchbar" onChange={(e : ChangeEvent<HTMLInputElement>) => props.onCallback(e.target.value)} />
               </div>
                </div>


                
                <img src={person} className="person" alt="" height={30} width={40} />
                <Link to={"/cart"}>
                <img src={cart} className="cart" alt="" height={30} width={30} /></Link>

            </section>
        </div>
    )
}