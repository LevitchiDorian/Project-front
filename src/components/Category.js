import React from 'react';
import '../styles/Category.css';

const categories = [
  { name: 'Tradițional' },
  { name: 'Asiatic' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Cafea' }
];

const Category = () => {
  return (
    <div className="category">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <div className="icon"></div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
