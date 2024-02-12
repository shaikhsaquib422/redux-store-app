import { useDispatch } from "react-redux";
import { clearCart } from "../slice/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex justify-between px-10 py-6 bg-red-300">
      <div>Logo Goes Here</div>

      <button
        className="px-2 py-1 rounded bg-cyan-200"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        clear cart
      </button>

      <nav className="flex gap-7">
        <a href="">Product</a>
        <a href="">Login</a>
        <a href="">Services</a>
      </nav>
    </section>
  );
};
export default Products;
