import { useSelector } from "react-redux";


const Username = () => {
  const { username } = useSelector((state: any) => state.user)

  return <div className="hidden text-sm font-semibold  md:block ">{username}</div>;
};

export default Username;
