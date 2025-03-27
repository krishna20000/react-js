import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartList() {
  const { cart, removeItem } = useContext(CartContext); // Get cart & removeItem

  return (
    <ul>
      {cart.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
