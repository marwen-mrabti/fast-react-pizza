import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className="bg-yellow-100 w-28 text-sm px-4 py-2 placeholder:text-stone-400 rounded-full focus:outline-none focus:ring-yellow-500 focus:ring-offset-2 focus:ring-opacity-50 sm:focus:w-72  sm:w-64 transition-all duration-300 "
          type="text"
          placeholder="search order..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchOrder;
