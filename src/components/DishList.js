// src/components/DishList.js
import React from 'react';
import DishCard from './DishCard';

function DishList({ data }) {
  return (
    <div className="dish-list">
      {data.map(dish => (
        <DishCard key={data.id} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;
