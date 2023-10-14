import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError() as any;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton goto="-1" isButton={true}>
        &larr; Go back
      </LinkButton>
    </div>
  );
}

export default Error;
