import React, { useState, useEffect } from 'react';

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data
        if (Array.isArray(data.products)) {
          setFeaturedProducts(data.products.slice(0, 30));
        } else {
          console.error('API response does not contain an array of products.');
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section id="featuredProducts">
      <h2>Featured Products</h2>
      <div id="productCarousel">
        {featuredProducts.map(product => (
          <div key={product.id} className="featured-product">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
