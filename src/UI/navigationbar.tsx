import { Link } from "react-router-dom"
import logo from '../assets/logo.svg';
import person from '../assets/person.png';
import searchicon from '../assets/search-icon.png';
import cart from '../assets/cart.png';

export const NavigationBar = () =>{

    return(
        <div className="navigationbar">
            <Link to={"/"}> 
            <img src={logo} alt="" width={30} height={30} />
            </Link>

            <section className="right-container">
                <div className="search-section">
                <img src={searchicon} className="searchicon" alt="" width={30} height={30} />
                <input type="text" className="searchbar" />
                </div>


                
                <img src={person} className="person" alt="" height={30} width={40} />
                <Link to={"/cart"}>
                <img src={cart} className="cart" alt="" height={30} width={30} /></Link>

            </section>
        </div>
    )
}