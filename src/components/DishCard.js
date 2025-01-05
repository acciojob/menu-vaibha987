// src/components/DishCard.js
import React from 'react';

function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.img} alt={dish.title} />
      <h3>{dish.title}</h3>
      <p>{dish.desc}</p>
      <p>Price: ${dish.price}</p>
    </div>
  );
}

export default DishCard;
