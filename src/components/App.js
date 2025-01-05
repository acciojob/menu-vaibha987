// src/App.js
import React, { useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import DishList from './components/DishList';
import data from './utils/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'breakfast', 'lunch', 'shakes'];

  const filteredDishes = selectedCategory === 'all'
    ? data
    : data.filter(dish => dish.category === selectedCategory);

  return (
    <div className="App">
      <h1>Dish Menu</h1>
      <CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />
      <DishList data={filteredDishes} />
    </div>
  );
}

export default App;
