import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-1 ">
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <div className="flex flex-col items-end space-y-4 ">
        <input
          className="input w-full"
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {username !== "" && <Button onClickHandler={() => {}}>Start ordering</Button>}
      </div>
    </form>
  );
}

export default CreateUser;
