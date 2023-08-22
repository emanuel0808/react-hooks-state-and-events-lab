import React, { useState } from 'react';
import Item from './Item';

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'all'
    ? props.items
    : props.items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange} data-testid="category-select">
        <option value="all">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
        {/* Add more category options here */}
      </select>
      <ul data-testid="item-list">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
