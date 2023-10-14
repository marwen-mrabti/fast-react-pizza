import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { cn } from "../../utils/utils";

type MenuItemProps ={
  pizza: {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
  };
}
function MenuItem({ pizza }: MenuItemProps) {
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
        <p className="text-sm italic capitalize text-stone-600">{pizza.ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between" >
          {!pizza.soldOut ? <p className="text-sm">{formatCurrency(pizza.unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          <Button classes="px-2 py-1 md:px-3 md:py-2" onClickHandler={()=>{console.log(pizza.name)}}  disabled={pizza.soldOut}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
