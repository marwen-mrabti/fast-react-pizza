import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
