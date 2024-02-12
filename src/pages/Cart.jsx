import { useDispatch, useSelector } from "react-redux";
import { increase } from "../slice/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <section className="grid grid-cols-2 gap-6 px-20 py-16 place-items-center bg-zinc-500">
      {cartItems.map((cartItem) => {
        const { title, price, id, amount } = cartItem;

        return (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-2 bg-red-300 h-44 w-44"
          >
            <h2>{`${title} : ${amount}`} </h2>
            <p>{`$${price}`}</p>

            <div>
              <button
                onClick={() => dispatch(increase(id))}
                className="m-1 rounded-sm bg-cyan-200"
              >
                increase
              </button>
              <button className="m-1 rounded-sm bg-cyan-200">decrease</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Cart;
