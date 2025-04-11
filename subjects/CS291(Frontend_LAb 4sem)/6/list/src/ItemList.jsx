import React from 'react';

const ItemList = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Always use a unique key
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
