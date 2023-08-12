import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem'; // Make sure the path is correct

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('API response does not contain an array of categories.');
        }
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <section id="categories">
      <h2>Categories</h2>
      <ul id="categoryList">
        {categories.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </ul>
    </section>
  );
}

export default Categories;
