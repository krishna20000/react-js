import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function InputBox() {
  const [item, setItem] = useState(""); // Local state for input
  const { addItem } = useContext(CartContext); // Get addItem from Context

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item..."
      />
      <button onClick={() => { addItem(item); setItem(""); }}>Add</button>
    </div>
  );
}
