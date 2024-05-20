import React, { useState } from "react";
import {FaUser, FaShoppingCart} from "react-icons/fa";
import CartPopup from "./cartPopUp";
import { NavLink, useNavigate} from 'react-router-dom';

const Header = ({cartItems, removeFromCart, handleSearch, isSearching})=>{

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery, selectedCategory)
      console.log(searchQuery, selectedCategory)
    }
  };

  const handleLink =()=>{
    if (isSearching) {
      handleSearch('', ''); 
    }
     navigate('/');
  }
 return(
<>
  <div className="MainHead">
    <div className="logo-search">
      <div className="logo">
        <h3 >Canopy</h3>
      </div>
      <div className="search">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
        </select>
        <input type="text" placeholder="Search..."
             onChange={handleInputChange}
              onKeyPress={handleKeyPress} />
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
        <li onClick={handleLink}><NavLink to="/" className="home-link">Home</NavLink></li>
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