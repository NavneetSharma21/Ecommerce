import React, { useState } from "react";
import {FaUser, FaShoppingCart} from "react-icons/fa";
import CartPopup from "./cartPopUp";
const Header = ({cartItems, removeFromCart})=>{

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
 return(
<>
  <div className="MainHead">
    <div className="logo-search">
      <div className="logo">
        <h3 >Canopy</h3>
      </div>
      <div className="search">
        <select>
          <option value="category1">Fruits</option>
          <option value="category2">Vegetables</option>
          <option value="category3">Dairy</option>
        </select>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="Icon-Profile">
      <div className="profile">
        <span><FaUser /></span>
       
      </div>
      <div className="cart" onClick={toggleCart} >
        <p><FaShoppingCart /></p>
        <span>{cartItems.length}</span>
        </div>
      </div>
    </div> 
    <div className="second-header">
      <ul>
        <li>Home</li>
        <li>Groceries</li>
        <li>Offers and rollBacks</li>
        <li>About us</li>
        <li>Inspiration & recipes</li>
        <li id="button">In season now</li>
        <li>Contact</li>
        <li>Demos</li>
      </ul>
    </div>  
    </div>
    {isCartOpen && <CartPopup
     isOpen={isCartOpen}
      onClose={toggleCart} 
      cartItems={cartItems}
      removeFromCart={removeFromCart}/> }
      </>
 )
}

export default Header