import React from 'react';
import Header from './components/Header'; // Make sure the path is correct
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories'; // Make sure to import Categories
import CategoryItem from './components/CategoryItem'; // Adjust the path if needed

function Homepage() {
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}

export default Homepage;
