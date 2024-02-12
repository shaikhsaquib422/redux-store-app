import { useSelector } from "react-redux";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <main>
      <Products />
      <Cart />
    </main>
  );
}

export default App;
