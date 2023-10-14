import { useNavigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { cn } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

type cartItem = {
  pizzaId: string | number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state: any) => state.user);
  const cart = useSelector(getCart);

  const handleOnClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-4 py-1 space-y-8 ">
      <LinkButton goto="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">
        Your cart, <span className="capitalize text-stone-800">{username}</span>
      </h2>

      <ul className="flex flex-col divide-y divide-stone-200 border-b">
        {!cart.length ? (
          <h1 className="text-xl">
            Your cart is empty,{" "}
            <LinkButton classes="text-xl" goto="/menu">
              go add some pizzas!
            </LinkButton>
          </h1>
        ) : (
          cart.map((item: cartItem, index: number) => (
            <CartItem key={index} item={item} />
          ))
        )}
      </ul>

      {!cart.length ? null : (
        <div className="space-x-8">
          <Button onClickHandler={() => navigate("/order/new")}>Order pizzas</Button>
          <button
            className={cn(
              "bg-transparent border-2 border-stone-600 uppercase font-semibold text-stone-800 px-4 py-3 rounded-full  hover:bg-stone-200 hover:text-stone-900 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 transition-colors duration-200"
            )}
            onClick={handleOnClearCart}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
