import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaRegStar} from "react-icons/fa";
import './catagory.css';

const Product = ({addToCart, ApiData}) => {
    const [products, setProducts] = useState([]);
    const scrollContainerRef = useRef();
    
    useEffect(() => {
       setProducts(ApiData)
    }, [ApiData])


    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: -300,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: 300,
                behavior: "smooth"
            });
        }
    };
    return (
        <div className="category">
            <div className="Category-head">
                <h1>Fresh in today</h1>
                <p>View all</p>
            </div>
            <div className="Product">
                <button className="gotoPrevButton" onClick={scrollLeft}><FaAngleLeft /></button>
                <button className="gotoNextButton" onClick={scrollRight}><FaAngleRight /></button>
                <div className="Cart-items"  ref={scrollContainerRef}>
                {products.map(item => (
                        <div key={item.id} className="slide-item">
                            <img src={item.img} alt={item.name} className="product-image" />
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.qty}</p>
                            <p >Rating:<spn id="ratings"> <FaRegStar /><FaRegStar /><FaRegStar /></spn></p>
                            <p>Price: ${item.price}</p>
                            <button onClick={()=>addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Product;