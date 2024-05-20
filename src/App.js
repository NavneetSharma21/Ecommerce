import { useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Category from './components/Catagory';
import Carousel from './components/coursel';
import Footer from './components/footer';
import Header from './components/header';
import Product from './components/product';
import {Route, Routes} from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
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

  
  const handleSearch = (searchTerm, searchCat) => {
    if (searchTerm) {
      setIsSearching(true);
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.category.toLowerCase().includes(searchCat.toLowerCase())
      );
      setSearchResults(filteredData);
      console.log(filteredData);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };
  
  useEffect(() => {
    }, [cartItems]);

  return (
     <>
      <Header
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleSearch={handleSearch}
        isSearching ={isSearching}
      />
       <Routes>
        <Route path="/" element={
          <>
             {!isSearching ? (
              <>
                <Carousel />
                <Category ApiData={data} />
                <Product addToCart={addToCart} ApiData={data} />
              </>
            ) : (
              <Product addToCart={addToCart} ApiData={searchResults} />
            )}
          </>
        } />
      </Routes>
      <Footer />
      </>
   
    );
}

export default App;
