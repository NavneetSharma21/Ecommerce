import { useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Category from './components/Catagory';
import Carousel from './components/coursel';
import Footer from './components/footer';
import Header from './components/header';
import Product from './components/product';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const ApiUrl = "https://fruitapi-mf2v.onrender.com/data";
  
  useEffect(() => {
    const FetchData = async () => {
        try {
            const response = await axios.get(ApiUrl)
            setData(response.data)
                  }
        catch (error) {
            console.log(error.message)
        }
    }
    FetchData();
}, [ApiUrl])

  const addToCart = (product) => {   
    setCartItems((prevCartItems) => [...prevCartItems, product]);   
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };
  
  useEffect(() => {
    }, [cartItems]);

  return (
    <>
     <Header cartItems={cartItems} removeFromCart={removeFromCart} />
     <Carousel/>
     <Category ApiData={data}/>
     <Product addToCart={addToCart} ApiData={data} />
     <Footer/>
    </>
   
    );
}

export default App;
