import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button
        onClick={() =>
          addToCart({ id: 1, name: "Product A", price: 100 })
        }
      >
        Add Product A
      </button>
      <button
        onClick={() =>
          addToCart({ id: 2, name: "Product B", price: 150 })
        }
      >
        Add Product B
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
};

export default ShoppingCart;