// importing necessary tools from the React library
import React, { useState, useEffect } from 'react';

// defining a functional component named HomePage
function HomePage(){
    // creating state variables to hold featured products and categories 
    const [featuredProduct, setFeaturedProducts] = useState([])
    const [categories, setCategories] = useState([])
    
 //  using useEffect to perform actions after component is created
  useEffect(() =>{
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(products=>{
setFeaturedProducts(products.slice(0, 5));
});

// fetc
    }