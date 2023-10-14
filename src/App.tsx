import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import CreateUser from "./features/user/CreateUser";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import Order, { Loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/user", element: <CreateUser /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
