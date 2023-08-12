// Importing necessary tools from the React library
import  react, { useState, useEffect } from 'react';

function Categories(){
    // Creating state variables to hold categories
const [categories, setFeaturedProducts] = useEffect([]);

// Fetching data from the API
  useEffect(()=>{
 fetch( 'https://dummyjson.com/products/categories')
 .then(res => res.json())
 .then(categories =>{
    setFeaturedProducts(categories);
 });
  },[]);

  return(
    <section id='categories'>
        <h2>Categories</h2>
        <ul id='categoryList'>
        {categories.map(category =>(
            <li key={category.id}>{category}</li>
        ))}
        </ul>
    </section>
  )

}
export default Categories;