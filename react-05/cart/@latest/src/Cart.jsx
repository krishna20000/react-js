import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const items = [
    { id: 1, name: "Fruit" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Milk" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart App</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Items</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2 border-b">
            <span className="text-lg">{item.name}</span>
            <button
              onClick={() => addToCart(item)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Cart</h3>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b">
              <span className="text-lg">{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
