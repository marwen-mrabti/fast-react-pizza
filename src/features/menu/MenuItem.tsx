import { formatCurrency } from "../../utils/helpers";

interface MenuItemProps {
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
    <li>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <div>
        <p>{pizza.name}</p>
        <p>{pizza.ingredients.join(", ")}</p>
        <div>
          {!pizza.soldOut ? <p>{formatCurrency(pizza.unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
