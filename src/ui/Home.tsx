import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { username } = useSelector((state: any) => state.user);

  return (
    <div className="px-4  my-10 sm:my-16  flex flex-col items-center justify-start">
      <h1 className="mb-8 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {
        username !== "" ? (
      <Button onClickHandler={()=>navigate("/menu")}  >See the menu</Button>
        ) : (
     <CreateUser />
        )
   }
    </div>
  );
}

export default Home;
