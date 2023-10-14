import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { cn } from "../../utils/utils";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const navigate = useNavigate();
  const cart = fakeCart;

  return (
    <div className="px-4 py-1 space-y-8 ">
      <LinkButton goto="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="flex flex-col divide-y divide-stone-200 border-b">
        {!cart.length ? (<h1 className="text-xl">
          Your cart is empty, <LinkButton classes="text-xl" goto="/menu">go add some pizzas!</LinkButton>
        </h1>) :cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        )
        )}
      </ul>

      <div className="space-x-8">
        <Button onClickHandler={() => navigate("/order/new")}>Order pizzas</Button>
        <button className={cn(
        "bg-transparent border-2 border-stone-600 uppercase font-semibold text-stone-800 px-4 py-3 rounded-full  hover:bg-stone-200 hover:text-stone-900 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 transition-colors duration-200",
          {
        "bg-stone-100 text-stone-700 cursor-not-allowed": cart.length,
          }
      )} >Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
