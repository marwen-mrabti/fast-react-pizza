import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./cartSlice";
type CartItemProps = {
  item: {
    pizzaId: string | number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  };
};

function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, unitPrice, totalPrice } = item;

  const handleOnQuantityIncrease = () => {
    dispatch(increaseQuantity({ pizzaId }));
  };
  const handleOnQuantityDecrease = () => {
    dispatch(decreaseQuantity({ pizzaId }));
  };

  const handleOnDelete = () => {
    dispatch(removeFromCart({ pizzaId }));
  };

  return (
    <li className="sm:flex sm:items-center sm:justify-between  space-x-4 py-2">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400  text-xl font-bold hover:bg-green-300"
          onClick={handleOnQuantityIncrease}
        >
          +
        </button>
        <button
          disabled={quantity === 1}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-400 text-xl font-bold hover:bg-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleOnQuantityDecrease}
        >
          -
        </button>
        <Button classes="px-2 py-1 md:px-3 md:py-1.5" onClickHandler={handleOnDelete}>
          delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
