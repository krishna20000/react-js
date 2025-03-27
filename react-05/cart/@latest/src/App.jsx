import { CartProvider } from "./CartContext";
import InputBox from "./InputBox";
import CartList from "./CartList";

export default function App() {
  return (
    <CartProvider> {/* Wraps all components to provide access to cart data */}
      <div>
        <h2>Shopping Cart</h2>
        <InputBox />  {/* Can access addItem from context */}
        <CartList />  {/* Can access cart & removeItem from context */}
      </div>
    </CartProvider>
  );
}
