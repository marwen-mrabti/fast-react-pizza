import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="flex space-x-10">
      <Link to="/">Fast-Pizza Co.</Link>
      <SearchOrder />
      <p>marwen</p>
      <Link to="/menu">Menu</Link>

      <Link to="/order/new">New Order</Link>
    </header>
  );
};

export default Header;
