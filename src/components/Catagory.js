import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './catagory.css';

const Category = ({ApiData}) => {
    const [categories, setCategories] = useState([])
    const scrollContainerRef = useRef(null);
   
    useEffect(() => {
       setCategories(ApiData)
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
                <h1>Shop Groceries</h1>
                <p>View all</p>
            </div>
            <div className="Cart-Category" ref={scrollContainerRef}>               
                    <button className="gotoPrevButton" onClick={scrollLeft}><FaAngleLeft /></button>
                    <button className="gotoNextButton" onClick={scrollRight}><FaAngleRight /></button>
                    {categories.map((category, index) => (
                        <div className="slide"   key={index}>
                            <img src={category.img} alt={category.name} />
                            <p>{category.category}</p>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}
export default Category;