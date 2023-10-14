import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { cn } from "../../utils/utils";
import { addToCart, getCart, removeFromCart } from "../cart/cartSlice";

type MenuItemProps = {
  pizza: {
    id: number | string;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
  };
};

function MenuItem({ pizza }: MenuItemProps) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const isPizzaInCart = cart.some((item: any) => item.pizzaId === pizza.id);

  const handleOnAddToCart = () => {
    dispatch(
      addToCart({ pizzaId: pizza.id, name: pizza.name, unitPrice: pizza.unitPrice })
    );
  };

  const handleOnRemoveFromCart = () => {
    dispatch(removeFromCart({ pizzaId: pizza.id }));
  };

  return (
    <li className="flex gap-4 py-2 ">
      <img
        className={cn("h-24 ", {
          "opacity-70 grayscale": pizza.soldOut,
        })}
        src={pizza.imageUrl}
        alt={pizza.name}
      />
      <div className="flex flex-col flex-grow  ">
        <p className="font-medium">{pizza.name}</p>
        <p className="text-sm italic capitalize text-stone-600">
          {pizza.ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!pizza.soldOut ? (
            <p className="text-sm">{formatCurrency(pizza.unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>
          )}
          {pizza.soldOut ? null : (
            <Button
              classes="px-2 py-1 md:px-3 md:py-2"
              onClickHandler={isPizzaInCart ? handleOnRemoveFromCart : handleOnAddToCart}
              disabled={pizza.soldOut}
            >
              {isPizzaInCart ? "remove" : "Add to cart"}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
