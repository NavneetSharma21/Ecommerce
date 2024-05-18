import React from 'react';
import './popUp.css'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartPopup = ({ isOpen, onClose, cartItems, removeFromCart}) => {

    const subtotal = cartItems.reduce((acc, product) => acc + product.price, 0);

    return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
      <div className="cart-content">
        <h3>Your Cart</h3>
        <span onClick={onClose}>Close</span>
      </div>
      <div className='checkOut'>
        <div className='text'>
        <h4>Subtotal</h4>
        <span>Total RS : {subtotal}</span>
        </div>        
        <button>checkOut</button>
      </div>
      <div className='Cart-product'>
        <h3>Products({cartItems.length})</h3>
       <p id='view-all'>View all</p>

        {cartItems.map((item, index)=>(      
             <div className='cart-details' key={index}>
            <img src={item.img} alt={item.name}></img>
            <div className='cart-text'>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div className='input-cart'>
                <i><FaMinus /></i>
                <input type='text' placeholder='1'></input>
                <i><FaPlus /></i>
                <i onClick={()=> removeFromCart(index)} id='delete'><RiDeleteBin5Line /></i>
            </div>
            </div>          
           </div>


        ))}
      </div>
    </div>
  );
};

export default CartPopup;