import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen w-screen grid grid-col-1 grid-rows-[auto_1fr_auto] ">
      <Header />

      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">{isLoading ? <Loader /> : <Outlet />}</main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
