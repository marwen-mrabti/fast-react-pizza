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
