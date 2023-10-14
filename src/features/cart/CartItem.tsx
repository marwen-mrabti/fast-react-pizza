import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
type CartItemProps = {
  item: {
    pizzaId: string | number;
    name: string;
    quantity: number;
    unitPrice:number,
    totalPrice: number;
  };
};

function CartItem({ item }:CartItemProps) {
  const { pizzaId, name, quantity,unitPrice, totalPrice } = item ;

  return (
    <li className="sm:flex sm:items-center sm:justify-between  space-x-4 py-2">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <Button classes="px-2 py-1 md:px-3 md:py-1.5" onClickHandler={()=>console.log(name)}>delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
