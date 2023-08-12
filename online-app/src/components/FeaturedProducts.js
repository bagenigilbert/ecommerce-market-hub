// Importing necessary tools from the React library
import React, { useState, useEffect } from 'react';

function FeaturedProducts() {
  // Creating state variables to hold featured products
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  // Using useEffect to fetch featured products
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(products => {
        setFeaturedProducts(products.slice(0, 5));
      });
  }, []);
  
  return(
    <section id='featuredProducts'>
        <h2>FeaturedProducts</h2>
        <div id='productCarousel'>
           {featuredProducts.map(product =>(
            <div key={product.id} className='featured-product'>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
           ))} 
        </div>
    </section>
  )
}
export default FeaturedProducts;