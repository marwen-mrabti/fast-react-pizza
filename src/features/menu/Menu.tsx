import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

interface MenuItem {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

function Menu() {
  const menu = useLoaderData() as MenuItem[];

  return (
    <>
      {menu.map((pizza: MenuItem) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </>
  );
}

//in react-router-dom v6, the loader is a function that returns the data
export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
