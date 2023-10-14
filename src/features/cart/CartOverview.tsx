import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity) as number;
  const totalPrice = useSelector(getTotalPrice) as number;
  return (
    <div className="flex items-center justify-between bg-stone-800 text-sm text-stone-200 uppercase px-4 py-4 sm:px-6 md:text-base">
      <p className=" text-stone-300 tracking-wide space-x-4 sm:space-x-6 ">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
