import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-around space-x-10 bg-yellow-500 py-5 px-3 sm:px-6 ">
      <Link to="/">Fast-Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
