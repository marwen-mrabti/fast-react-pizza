import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="px-4  my-10 sm:my-16  flex flex-col items-center justify-start">
      <h1 className="mb-8 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
